// progressX 为滚动条距离窗口左边的距离，初始化后不再做修改。
let progressX = null;
//  positionX progress-bar 的横坐标位置
let positionX = null;
// 进度条长度
const progressLen = 478;
let timerID = null;
// let timestampArr = [1 ,2, 3, 4, 5, 6, 7, 8, 2, 1, 2, 3, 4, 5, 5, 4, 3, 4, 4, 3, 3, 3];
// let timestampArr = ["2019-01-23 00:00:00", "2019-01-23 00:00:05", "2019-01-23 00:00:10", "2019-01-23 00:00:15", "2019-01-23 00:00:20", "2019-01-23 00:00:25", "2019-01-23 00:00:30", "2019-01-23 00:00:35", "2019-01-23 00:00:40", "2019-01-23 00:00:45", "2019-01-23 00:00:50", "2019-01-23 00:00:55", "2019-01-23 00:01:00"];
let timestampArr = null;
let len = null;
let step = null;
// 进度条播放时间间隔
let timeout = 500;

/**
 *
 * @param timestampArr
 */
function initProgress (timestampArr) {
    if (!timestampArr.length) return;
    len = timestampArr.length - 1;

    step = cal(progressLen, len, "/");

    // progress-detail 内容的初始化
    $("#progress-time").text(timestampArr[0].timestamp);

    // progressX 为滚动按钮开始位置距离窗口左边的距离，初始化后不再做修改。
    progressX = $("#progress").offset().left + 10;

    // 初始化时 positionX 与 progressX 位置相同
    positionX = progressX;
    $("#progress-btn").on("mousedown", function (e) {
        setPlayStop();
        mouseMove();
    });
    $("#progress-bar").on("mousedown", function (e) {
        setPlayStop();
        progressBtnMoveTo(e);
        mouseMove();
    });
    $(document).on("mouseup", function (e) {
        $(document).off ("mousemove"); //弹起鼠标不做任何操作
    });
    $("#play-btn").on("click", function () {
        if ($("#play-btn-icon").hasClass("play-btn-play")) {
            setPlayStart();
        }
        else {
            setPlayStop();
        }
    });
}

/**
 *
 * @param data
 */
function progressBtnMoveTo(data) {
    if (data instanceof jQuery.Event) {
        positionX = event.clientX;
    }
    else {
        positionX = data;
    }
    if (positionX < progressX) return;
    if (positionX > cal(progressX + progressLen, 0.1, "+")) {
        setPlayStop();
        return;
    }
    let offsetX = positionX - progressX - 1;
    // console.log ("positionX", positionX);
    // console.log ("offsetX", offsetX);
    // 修改按钮的横坐标
    $("#progress-btn").css("left", offsetX);
    let index = cal(offsetX, step, "/", 0);
    // 修改时间标签
    $("#progress-time").text(timestampArr[index].timestamp);
    // 修改颜色
    dataModel.setNodeStatusByValue(timestampArr[index].ztData);
    realtimeData = timestampArr[index];
    let isDisplay = document.getElementById("data-display-div") ? document.getElementById("data-display-div").style.display: null;
    if (isDisplay !== null && isDisplay !== "none") {
        let nodeArr = timestampArr[index].ztData.filter(item => item.nodeTag === nodeSelected);
        updateNodeDetails(nodeArr[0].value, timestampArr[index].timestamp);
    }

    // for (let i = 0, len = nodeArr.length; i < len; i++) {
    //     dataModel.setNodeStatusByValue(timestampArr[index].ztData);
    // }
}

function mouseMove() {
    $(document).on ("mousemove", function (e) {
        progressBtnMoveTo(e);
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    });
}

/**
 *
 */
function setPlayStart() {
    if (positionX >= progressLen + progressX + 1) {
        clearInterval(timerID);
        return;
    }
    if (positionX <= cal(progressX + progressLen, 0.1, "+") && positionX >= cal(progressX + progressLen, 0.1, "-"))
    {
        positionX = progressX;
        progressBtnMoveTo(positionX);
    }
    timerID = setInterval(function () {
        // let step = cal(progressLen, len, "/");
        if (positionX + step > cal(progressX + progressLen, 0.1, "+")) {
            setPlayStop();
            return;
        }
        // 如果 progress-bar 位置处于两个跳跃节点之间，那么开始移动时将其置于下一个跳跃节点处。
        else if (cal(cal(positionX, progressX, "-"), step, "%") !== 0) {
            positionX = cal(cal(Math.ceil((positionX - progressX)/step), step, "*"), progressX, "+");
        }
        // 如果 progress-bar 位置处于跳跃节点处，则直接跳跃。
        else {
            positionX = cal(positionX, step, "+");
        }
        progressBtnMoveTo(positionX);

    }, timeout);
    $("#play-btn-icon").removeClass("play-btn-play");
    $("#play-btn-icon").addClass("play-btn-pause");
}

function setPlayStop() {
    if (timerID) clearInterval(timerID);
    $("#play-btn-icon").removeClass("play-btn-pause");
    $("#play-btn-icon").addClass("play-btn-play");
}

function progressReset () {
    $("#progress-time").text('2000-01-01 00:00:00');

}
