// let progressSplit = null;
let mainView = null;
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
            let nodeArr = getNode (diagramDM);
            let mainView = document.getElementsByClassName("main")[0];
            $.ajax ({
                type: 'POST',
                url: "http://localhost/server/trend.php",
                data: {"nodeTagArray": nodeArr},
                dataType: "json",
                success: function (nodeData) {
                    timeStampArr = dataPretreat(nodeData);;
                    console.log (timeStampArr);
                    initProgress(timeStampArr);
                    if (getDataIntervalID)
                        clearInterval(getDataIntervalID);
                    if (loadPageRightView) {
                        loadPageRightView.setStatus("normal");
                        graphView.fitContent(true);
                    }
                    else {

                        // initProgress(timeStampArr);
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
            loadPageRightView.setStatus("cr");
            graphView.fitContent(true);
            sendNodeAndRefresh(diagramDM, nodeArr);
            // progressSplit.
        }
}
];
