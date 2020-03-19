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
            slCount = g2d.sm().getSelection();
            return !slCount.length;
        },
        action: function () {
            copyNodeArr = [];
            let slModelList = g2d.sm().toSelection();
            slModelList.each(function (item, index) {
                let node = null;
                if (item instanceof ht.Text)
                    node = new ht.Text();
                else if (item instanceof ht.Node)
                    node = new ht.Node();
                else
                    return;
                // 复制 Style
                let tempStyle = item.getStyleMap();
                for (let item in tempStyle) {
                    node.setStyle(item, tempStyle[item]);
                }
                // 复制 Attr
                node.setAttrObject(item.getAttrObject());
                // 复制其他属性
                let tempPosition = item.getPosition();
                node.setPosition(parseInt(tempPosition.x + 30), parseInt(tempPosition.y + 30));
                node.setHost(item.getHost());
                node.setName(item.getName());
                node.setImage(item.getImage());
                node.setLayer(item.getLayer());
                node.setParent(item.getParent());
                node.setHost(item.getHost());
                copyNodeArr.push(node);
            });
        }
    },
    {
        label: "粘贴",
        fordata: 1,
        disabled: function () {
            return !copyNodeArr.length;
        },
        action: function(item, event) {
            copyNodeArr.forEach(function (node, index) {
                indexDataModel.add(node);
            });
        }
    },
    {

    }
];
