// let progressSplit = null;
let mainView = null;

var index_contextmenu_config = [
    {
        label: "复制",
        fordata: 1,
        disabled: function () {
            let slCount = g2d.sm().getSelection();
            return !slCount.length;
        },
        action: function () {
            nodeListCopy();
        }
    },
    {
        label: "粘贴",
        fordata: 1,
        disabled: function () {
            return !slModelList.length;
        },
        action: function(item, e) {
            nodeListPaste(e);
        }
    },
    {

    }
];


let load_contextmenu_config = [
    {
        label: "查看测点信息",
        fordata: 1,
        action: function(item, event) {
            // showNodeDetails (tag, realtimeData, position);
        }
    },
    {
        label: "查看测点趋势",
        fordata: 1,
        action: function(item, event) {
            let slModel = graphView.sm().getSelection();
            let nodeTagArr = [];
            if (slModel.length !== 0) {
                slModel.forEach(function (item, index) {
                    nodeTagArr.push(item.getTag());
                });
                $.ajax ({
                    type: 'POST',
                    url: "http://localhost/node-trend.php",
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
        label: "查看历史回放",
        fordata: 2,
        action: function(item, event) {
            showHistoryDataDialog();
        },
        disabled: function (item) {
            return progressBar.flag;
        }
    },
    {
        label: "关闭历史回放",
        fordata: 2,
        action: function(item, event) {
            progressBar.destroy();
            pageMainView.setStatus("cr");
            graphView.fitContent(true);
            getRealTimeData(nodeArr);
        },
        disabled: function (item) {
            return !progressBar.flag;
        }
    }
];
