/**
 * ProgressBar
 * 依赖于 jQuery 与 calculate.js
 */
// export default class ProgressBar {
class ProgressBar {
    // 进度条的是否在使用的生命周期标志
    #flag;
    // 为滚动条距离窗口左边的距离，初始化后不再做修改。
    #progressX;
    // progress-bar 的横坐标位置
    #positionX;
    // 进度条长度
    #progressLen;
    // 存储定时器 ID
    #timerID;
    // 显示在标签栏里的数据
    #dataArr;
    // 主要的数据间隔
    #len;
    // 数据步长
    #step;
    // 默认的时间间隔
    #defaultInterval;
    // 最小的时间间隔（8倍速）
    #minInterval;
    // 进度条播放时间间隔
    #interval;
    constructor() {
        this.#flag = false;
        this.#progressX = null;
        this.#positionX = null;
        this.#progressLen = 478;
        this.#timerID = null;
        this.#dataArr = null;
        this.#len = null;
        this.#step = null;
        this.#defaultInterval = 500;
        this.#minInterval = 62.5;
        this.#interval = 500;
        // 进度条的 HTML 结构
        this.progressDiv = document.createElement('div');
        this.progressDiv.id = "progress-div-container";
        this.progressDiv.innerHTML = `
            <div id="progress-container">
                <button id="play-btn" type="button" class="btn">
                    <span id="play-btn-icon" class="play-btn-play"></span>
                </button>
                <button id="fast-forward-btn" type="button" class="btn" title="${this.#defaultInterval / this.#interval}倍速">
                    <span id="fast-forward-btn-icon" class="fast-forward-btn-play"></span>
                </button>
                <div id="progress">
                    <div id="progress-bar" class=""  style=""></div>
                    <div id="progress-btn"></div></div>
                    <div id="progress-time">1970-01-01 00:00:00</div>
                </div>`;

        this.progressBarMoveCallback = null;
    }

    get flag() {
        return this.#flag;
    }

    /**
     * 进度条的总初始化方法
     * init()
     * @param dataArr
     * @param callback
     */
    init (dataArr, callback) {
        this.#flag = true;
        this.#dataArr = dataArr;
        if (!this.#dataArr.length) return;

        this.#len = this.#dataArr.length - 1;

        this.#step = cal(this.#progressLen, this.#len, "/");
        while (cal(this.#step, this.#len, '*') > this.#progressLen) {
            this.#len++;
            this.#step = cal(this.#progressLen, this.#len, "/");
        }

        // progress-detail 内容的初始化
        $("#progress-time").text(this.#dataArr[0]);

        // this.#progressX 为滚动按钮开始位置距离窗口左边的距离，初始化后不再做修改。
        this.#progressX = $("#progress").offset().left + 10;

        // 初始化时 this.#positionX 与 this.#progressX 位置相同
        this.#positionX = this.#progressX;
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
                this.setPlayStart(this.#interval);
            }
            else {
                this.setPlayStop();
            }
        });
        $("#fast-forward-btn").on("click", () => {
            Number(this.#interval) === this.#minInterval ? this.#interval = this.#defaultInterval: this.#interval /= 2;
            let bs = this.#defaultInterval / this.#interval;
            $("#fast-forward-btn")[0].title = `${bs}倍速`;
            $("#fast-forward-btn-icon")[0].style.backgroundImage = bs === 1 ? `url('progress-bar/images/fast-forward.png')`: `url('progress-bar/images/@${bs}.png')`;
            this.setPlayStart(this.#interval);
        });
        this.progressBarMoveCallback = callback;
        // 设置到一个初始状态
        this.progressBtnMoveTo(this.#positionX);
    }

    /**
     * progressBtnMoveTo
     * 进度条移动方法
     * @param data
     */
    progressBtnMoveTo(data) {
        if (data instanceof jQuery.Event) {
            this.#positionX = event.clientX;
        }
        else {
            this.#positionX = data;
        }
        if (this.#positionX < this.#progressX) return;
        if (this.#positionX > cal(this.#progressX + this.#progressLen, 0.1, "+")) {
            this.setPlayStop();
            return;
        }
        let offsetX = this.#positionX - this.#progressX - 1;
        // console.log ("this.#positionX", this.#positionX);
        // console.log ("offsetX", offsetX);
        // 修改按钮的横坐标
        $("#progress-btn").css("left", offsetX);
        let index = cal(offsetX, this.#step, "/", 0);
        // 修改时间标签
        $("#progress-time").text(this.#dataArr[index]);

        // 进度条移动时的主要操作callback
        this.progressBarMoveCallback(index);
    }

    /**
     * mouseMove
     *
     */
    mouseMove() {
        $(document).on ("mousemove", e => {
            this.progressBtnMoveTo(e);
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        });
    }

    /**
     * setPlayStart
     * 进度条的播放开始方法
     * @param interval
     */
    setPlayStart(interval) {
        clearInterval(this.#timerID);
        // 如果预计下一次播放会跳出进度条范围，则停止播放。
        if (this.#positionX >= this.#progressLen + this.#progressX + 1) {
            return;
        }
        // 如果播放到头了，下一次播放从头开始。
        if (this.#positionX <= cal(this.#progressX + this.#progressLen, this.#step, "+") && this.#positionX >= cal(this.#progressX + this.#progressLen, this.#step, "-"))
        {
            this.#positionX = this.#progressX;
            this.progressBtnMoveTo(this.#positionX);
        }
        // 主要的播放操作
        this.#timerID = setInterval(e =>{
            // let this.#step = cal(this.#progressLen, this.#len, "/");
            if (this.#positionX + this.#step > cal(this.#progressX + this.#progressLen, 0.1, "+")) {
                this.setPlayStop();
                return;
            }
            // 如果 progress-bar 位置处于两个跳跃节点之间，那么开始移动时将其置于下一个跳跃节点处。
            else if (cal(cal(this.#positionX, this.#progressX, "-"), this.#step, "%") !== 0 ) {
            // else if (cal(cal(this.#positionX, this.#progressX, "-"), this.#step, "%") !== 0 && cal(cal(this.#positionX, this.#progressX, "-"), this.#step, "%") !== this.#step) {
                this.#positionX = cal(cal(Math.ceil((this.#positionX - this.#progressX)/this.#step), this.#step, "*"), this.#progressX, "+");
            }
            // 如果 progress-bar 位置处于跳跃节点处，则直接跳跃。
            else {
                this.#positionX = cal(this.#positionX, this.#step, "+");
            }
            // 进度条 btn 移动到指定位置
            this.progressBtnMoveTo(this.#positionX);

        }, interval);
        $("#play-btn-icon").removeClass("play-btn-play");
        $("#play-btn-icon").addClass("play-btn-pause");
    }

    /**
     * setPlayStop
     * 进度条的播放停止方法
     */
    setPlayStop() {
        if (this.#timerID) clearInterval(this.#timerID);
        $("#play-btn-icon").removeClass("play-btn-pause");
        $("#play-btn-icon").addClass("play-btn-play");
    }

    progressReset () {
        $("#progress-time").text('2000-01-01 00:00:00');

    }

    /**
     * destroy
     * 进度条的销毁方法
     */
    destroy() {
        this.#flag = false;
        this.setPlayStop();
        this.#interval = 500;
        $("#fast-forward-btn")[0].title = `1倍速`;
        $("#fast-forward-btn-icon")[0].style.backgroundImage = `url('progress-bar/images/fast-forward.png')`;
        $("#progress-btn").off("mousedown");
        $("#progress-bar").off("mousedown");
        $(document).off("mouseup");
        $("#play-btn").off("click");
        $("#fast-forward-btn").off("click");
    }
}
