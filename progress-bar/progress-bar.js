/**
 * ProgressBar
 * 依赖于 jQuery
 */
// export default class ProgressBar {
class ProgressBar {
    constructor() {
        // this.progressX 为滚动条距离窗口左边的距离，初始化后不再做修改。
        this.progressX = null;
        //  this.positionX progress-bar 的横坐标位置
        this.positionX = null;
        // 进度条长度
        this.progressLen = 478;
        // 存储定时器 ID
        this.timerID = null;
        // 主要的数据
        this.timestampArr = null;
        // 主要的数据间隔
        this.len = null;
        // 数据步长
        this.step = null;
        // 默认的时间间隔
        this.defaultTimeout = 500;
        // 最小的时间间隔（8倍速）
        this.minTimeout = 62.5;
        // 进度条播放时间间隔
        this.timeout = 500;
        // 进度条的 HTML 结构
        this.progressDiv = document.createElement('div');
        this.progressDiv.id = "progress-div-container";
        this.progressDiv.innerHTML = `
            <div id="progress-container">
                <button id="play-btn" type="button" class="btn">
                    <span id="play-btn-icon" class="play-btn-play"></span>
                </button>
                <button id="fast-forward-btn" type="button" class="btn" title="${this.defaultTimeout / this.timeout}倍速">
                    <span id="fast-forward-btn-icon" class="fast-forward-btn-play"></span>
                </button>
                <div id="progress">
                    <div id="progress-bar" class=""  style=""></div>
                    <div id="progress-btn"></div></div>
                    <div id="progress-time">1970-01-01 00:00:00</div>
                </div>`;
    }
    // setProgressLen(len) {
    //     this.progressLen = len;
    // }
    // setTimestampArr(arr) {
    //     this.timestampArr = arr;
    // }
    // setTimeout(timeout) {
    //     this.timeout = timeout;
    // }

    /**
     * init()
     * @param timestampArr
     */
    init (timestampArr) {
        this.timestampArr = timestampArr;
        if (!this.timestampArr.length) return;

        this.len = this.timestampArr.length - 1;

        this.step = cal(this.progressLen, this.len, "/");

        // progress-detail 内容的初始化
        $("#progress-time").text(this.timestampArr[0].timestamp);

        // this.progressX 为滚动按钮开始位置距离窗口左边的距离，初始化后不再做修改。
        this.progressX = $("#progress").offset().left + 10;

        // 初始化时 this.positionX 与 this.progressX 位置相同
        this.positionX = this.progressX;
        $("#progress-btn").on("mousedown", e =>{
            this.setPlayStop();
            this.mouseMove();
        });
        $("#progress-bar").on("mousedown", e =>{
            this.setPlayStop();
            this.progressBtnMoveTo(e);
            this.mouseMove();
        });
        $(document).on("mouseup", e => {
            $(document).off ("mousemove"); //弹起鼠标不做任何操作
        });
        $("#play-btn").on("click", () => {
            if ($("#play-btn-icon").hasClass("play-btn-play")) {
                this.setPlayStart(this.timeout);
            }
            else {
                this.setPlayStop();
            }
        });
        $("#fast-forward-btn").on("click", () => {
            Number(this.timeout) === this.minTimeout ? this.timeout = this.defaultTimeout: this.timeout /= 2;
            $("#fast-forward-btn")[0].title = `${this.defaultTimeout / this.timeout}倍速`;
            this.setPlayStart(this.timeout);
        });
    }

    /**
     *
     * @param data
     */
    progressBtnMoveTo(data) {
        if (data instanceof jQuery.Event) {
            this.positionX = event.clientX;
        }
        else {
            this.positionX = data;
        }
        if (this.positionX < this.progressX) return;
        if (this.positionX > cal(this.progressX + this.progressLen, 0.1, "+")) {
            this.setPlayStop();
            return;
        }
        let offsetX = this.positionX - this.progressX - 1;
        // console.log ("this.positionX", this.positionX);
        // console.log ("offsetX", offsetX);
        // 修改按钮的横坐标
        $("#progress-btn").css("left", offsetX);
        let index = cal(offsetX, this.step, "/", 0);
        // 修改时间标签
        $("#progress-time").text(this.timestampArr[index].timestamp);
        // 修改颜色
        dataModel.setNodeStatusByValue(this.timestampArr[index].ztData);
        realtimeData = this.timestampArr[index];
        let isDisplay = document.getElementById("data-display-div") ? document.getElementById("data-display-div").style.display: null;
        if (isDisplay !== null && isDisplay !== "none") {
            let nodeArr = this.timestampArr[index].ztData.filter(item => item.nodeTag === nodeSelected);
            updateNodeDetails(nodeArr[0].value, this.timestampArr[index].timestamp);
        }

        // for (let i = 0, this.len = nodeArr.this.length; i < this.len; i++) {
        //     dataModel.setNodeStatusByValue(this.timestampArr[index].ztData);
        // }
    }

    mouseMove() {
        $(document).on ("mousemove", e => {
            this.progressBtnMoveTo(e);
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        });
    }

    /**
     *
     */
    setPlayStart(timeout) {
        clearInterval(this.timerID);
        // 如果预计下一次播放会跳出进度条范围，则停止播放。
        if (this.positionX >= this.progressLen + this.progressX + 1) {
            return;
        }
        // 如果播放到头了，下一次播放从头开始。
        if (this.positionX <= cal(this.progressX + this.progressLen, 0.1, "+") && this.positionX >= cal(this.progressX + this.progressLen, 0.1, "-"))
        {
            this.positionX = this.progressX;
            this.progressBtnMoveTo(this.positionX);
        }
        // 主要的播放操作
        this.timerID = setInterval(e =>{
            // let this.step = cal(this.progressLen, this.len, "/");
            if (this.positionX + this.step > cal(this.progressX + this.progressLen, 0.1, "+")) {
                this.setPlayStop();
                return;
            }
            // 如果 progress-bar 位置处于两个跳跃节点之间，那么开始移动时将其置于下一个跳跃节点处。
            else if (cal(cal(this.positionX, this.progressX, "-"), this.step, "%") !== 0) {
                this.positionX = cal(cal(Math.ceil((this.positionX - this.progressX)/this.step), this.step, "*"), this.progressX, "+");
            }
            // 如果 progress-bar 位置处于跳跃节点处，则直接跳跃。
            else {
                this.positionX = cal(this.positionX, this.step, "+");
            }
            // 进度条 btn 移动到指定位置
            this.progressBtnMoveTo(this.positionX);

        }, timeout);
        $("#play-btn-icon").removeClass("play-btn-play");
        $("#play-btn-icon").addClass("play-btn-pause");
    }

    setPlayStop() {
        if (this.timerID) clearInterval(this.timerID);
        $("#play-btn-icon").removeClass("play-btn-pause");
        $("#play-btn-icon").addClass("play-btn-play");
    }

    progressReset () {
        $("#progress-time").text('2000-01-01 00:00:00');

    }
}
