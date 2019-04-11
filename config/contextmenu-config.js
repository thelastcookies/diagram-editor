// let progressSplit = null;
let mainView = null;
let slModel = null;
var load_contextmenu_config = [
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

var index_contextmenu_config = [
    {
        label: "复制",
        fordata: 1,
        disabled: function () {
            slModel = g2d.sm().getSelection()._as;
            return slModel.length ? false : true;
        },
        action: function () {
            copyNodeArr = [];
            slModel.forEach(function (item, index) {
                let node = null;
                if (item instanceof ht.Text)
                    node = new ht.Text();
                else
                    node = new ht.Node();


                let tempStyle = item.getStyleMap();
                for (let item in tempStyle) {
                    node.setStyle(item, tempStyle[item]);
                }
                let tempPosition = item.getPosition();
                node.setHeight(item.getHeight());
                node.setWidth(item.getWidth());
                node.setPosition(parseInt(tempPosition.x + 30), parseInt(tempPosition.y + 30));
                node.setHost(item.getHost());
                node.setName(item.getName());
                node.setLayer(item.getLayer());
                copyNodeArr.push(node);
                console.log("item", item);
                console.log("node", node);
            });
        }
    },
    {
        label: "粘贴",
        fordata: 1,
        disabled: function () {
            return copyNodeArr.length ? false : true;
        },
        action: function(item, event) {
            copyNodeArr.forEach(function (node, index) {
                indexDataModel.add(node);
            });
        }
    }
];
