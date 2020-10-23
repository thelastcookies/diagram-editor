// let progressSplit = null;
let mainView = null;
let slModelList = new ht.List();

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
            let copyNodeArr = [];
            slModelList.each(function (item, index) {
                let node = null;
                if (item instanceof ht.Text)
                    node = new ht.Text();
                else if (item instanceof ht.Shape)
                    node = new ht.Shape();
                else if (item instanceof ht.Node)
                    node = new ht.Node();
                else
                    return;
                // 复制 Style
                node.setStyleMap(item.getStyleMap());
                // 复制 Attr
                node.setAttrObject(item.getAttrObject());
                // 复制其他属性
                // 名称
                node.setName(item.getName());
                // Tag
                // node.setTag(item.getTag());
                // 宿主
                node.setHost(item.getHost());
                // 父元素
                node.setParent(item.getParent());
                // 图片或者连线设置
                if (item instanceof ht.Edge) {

                }
                else if (item instanceof ht.Shape) {
                    node.setPoints(item.getPoints());
                }
                else {
                    node.setImage(item.getImage());
                }
                // 图层
                node.setLayer(item.getLayer());
                // 旋转角度
                node.setRotation(item.getRotation());
                // 位置与大小
                // node.setRect(item.getRect());
                node.setHeight(item.getHeight());
                node.setWidth(item.getWidth());
                // 修改位置
                // node.setPosition(event.clientX + 30 - 260, event.clientY + 30 - 25);
                let tempPosition = item.getPosition();
                node.setPosition(parseInt(tempPosition.x + 30), parseInt(tempPosition.y + 30));
                indexDataModel.add(node);
                copyNodeArr.push(node);
            });
            g2d.sm().ss(copyNodeArr);
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
