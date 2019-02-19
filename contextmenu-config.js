let mainView = null;
let bottomView = null;
var contextmenu_config = [
    {
        label: "查看测点信息",
        fordata: 1
    },
    {
        label: "查看测点趋势",
        fordata: 1,
        action: function(item, event) {
            let slModel = graphView.sm().getSelection();
            let nodeTagArr = [];
            slModel.forEach(function (item, index) {
                nodeTagArr.push(item.getTag());
            });
            // console.log (nodeTagArr);
            if (slModel.length !== 0) {
                $.ajax ({
                    type: 'POST',
                    url: "http://localhost/server/node-trend.php",
                    data: {nodeTagArr: nodeTagArr},
                    dataType: "json",
                    success: function (nodeDataArr) {
                        console.log(nodeDataArr);
                        showNodeTrendDialog(nodeDataArr);
                    }
                });
            }
        }
    },
    {
        label: "查看XX",
        fordata: 1
    },
    {
        label: "查看趋势",
        fordata: 2,
        action: function(item, event) {
            let nodeArr = getNode (dm);
            $.ajax ({
                type: 'POST',
                url: "http://localhost/server/trend.php",
                data: {"nodeTagArray": nodeArr},
                dataType: "json",
                success: function (nodeData) {
                    timeStampArr = dataPretreat(nodeData);;
                    console.log (timeStampArr);
                    if (getDataIntervalID)
                        clearInterval(getDataIntervalID);
                    if (mainView) {
                        mainView.setStatus("normal");
                        graphView.fitContent(true);
                    }
                    else {
                        var div = document.createElement('div');
                        div.id = "div-container";
                        let progressHTML = '<div id="progress-container"><button id="play-btn" type="button" class="btn btn-default"><span id="play-btn-icon" class="glyphicon glyphicon-play" aria-hidden="true"></span></button><div id="progress"><div id="progress-bar" class=""  style=""></div><div id="progress-btn"></div></div><div id="progress-time"></div></div>'
                        div.innerHTML = progressHTML;
                        mainView = new ht.widget.SplitView (graphView, div, 'v', -100);
                        mainView.addToDOM();
                        // progressView = mainView.getView ();
                        // progressView.className = 'progressView';
                        // document.body.appendChild (progressView);
                        // window.addEventListener ('resize', function (e) {
                        //     mainView.iv ();
                        // }, false);
                        initProgress(timeStampArr);
                        graphView.fitContent(true);
                    }
                }
            });
        }
    },
    {
        label: "关闭查看趋势",
        fordata: 2,
        action: function(item, event) {
            mainView.setStatus("cr");
            graphView.fitContent(true);
            sendNodeAndRefresh(dm, nodeArr);
            // mainView.
        }
}
];
