// let progressSplit = null;
let mainView = null;
let slModelList = new ht.List();
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
            let slCount = g2d.sm().getSelection();
            return !slCount.length;
        },
        action: function () {
            slModelList = g2d.sm().toSelection();
        }
    },
    {
        label: "粘贴",
        fordata: 1,
        disabled: function () {
            return !slModelList.length;
        },
        action: function(item, event) {
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
                // 名称
                node.setName(item.getName());
                // Tag
                node.setTag(item.getTag());
                // 宿主
                node.setHost(item.getHost());
                // 父元素
                node.setParent(item.getParent());
                // 图片
                node.setImage(item.getImage());
                // 图层
                node.setLayer(item.getLayer());
                // 旋转角度
                node.setRotation(item.getRotation());
                // 位置与大小
                node.setRect(item.getRect());
                // 修改位置
                // node.setPosition(event.clientX + 30 - 260, event.clientY + 30 - 25);
                let tempPosition = item.getPosition();
                node.setPosition(parseInt(tempPosition.x + 30), parseInt(tempPosition.y + 30));

                indexDataModel.add(node);
            });

            // copyNodeArr.forEach(function (node, index) {
                // node.setPosition(event.screenX + 30, event.screenY + 30);
            // });
        }
    },
    {

    }
];
