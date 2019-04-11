var colorObject = { func: function(item) { return item.selected ? '#1E90FF' : '#000'; } };

toolbar_config_left = [
    {
        id: 'edit',
        unfocusable: true,
        toolTip: '编辑',
        groupId: 'bar',
        icon: {
            width: 16,
            height: 16,
            comps: [
                {
                    type: 'image',
                    name: 'symbols/toolbarIcon/select.json',
                    color: colorObject
                }
            ]
        },
        action: function() {
            g2d.setEditable(true);
        }
    },
    {
        id: 'edge',
        unfocusable: true,
        toolTip: '连线',
        groupId: 'bar',
        icon: {
            width: 16,
            height: 16,
            comps: [
                {
                    type: 'image',
                    name: 'symbols/toolbarIcon/edge.json',
                    color: colorObject
                }
            ]
        },
        action: function() {
            g2d.setInteractors([edgeInteractor]);
            g2d.sm().cs();
        }
    },
    {
        id: 'rightAngle',
        unfocusable: true,
        toolTip: '直角连线',
        groupId: 'bar',
        icon: {
            width: 16,
            height: 16,
            comps: [
                {
                    type: 'image',
                    name: 'symbols/toolbarIcon/right-angle.json',
                    color: colorObject
                }
            ]
        },
        action: function() {
            g2d.setInteractors([
                new ht.graph.DefaultInteractor(g2d),
                new ht.graph.TouchInteractor(g2d, {
                    selectable: false
                }),
                new CreateAttachInteractor(g2d, 'h.v')
            ]);
            g2d.sm().cs();
        }
    },
    {
        id: 'polyline',
        unfocusable: true,
        toolTip: '多边形',
        groupId: 'bar',
        icon: {
            width: 16,
            height: 16,
            comps: [
                {
                    type: 'image',
                    name: 'symbols/toolbarIcon/polygon.json',
                    color: colorObject
                }
            ]
        },
        action: function() {
            g2d.setInteractors([shapeInteractor]);
            g2d.sm().cs();
        }
    },
    {
        id: 'attachment',
        unfocusable: true,
        toolTip: '关联',
        groupId: 'bar',
        icon: {
            width: 16,
            height: 16,
            comps: [
                {
                    type: 'image',
                    name: 'symbols/toolbarIcon/attach.svg',
                    color: colorObject
                }
            ]
        },
        action: function() {
            g2d.setInteractors([attachInteractor]);
            g2d.sm().cs();
        }
    },
    {
        id: 'attachCancel',
        unfocusable: true,
        toolTip: '取消关联',
        groupId: 'bar',
        icon: {
            width: 16,
            height: 16,
            comps: [
                {
                    type: 'image',
                    name: 'symbols/toolbarIcon/attach-cancel.svg',
                    color: colorObject
                }
            ]
        },
        action: function() {
            g2d.setInteractors([attachInteractor]);
            g2d.sm().cs();
        }
    }
];

toolbar_config_right = [
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/new.svg'
            }]
        },
        toolTip: '新建',
        action: function() {
            showNewPageDialog();

        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/open.svg'
            }]
        },
        toolTip: '打开',
        action: function() {
            showOpenPageDialog();
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                    type: 'image',
                    name: 'symbols/toolbarIcon/save.svg'
                }]
        },
        toolTip: '保存',
        action: function() {
            showSavePageDialog(indexDataModel.serialize(2));
        }
    },
    {
        id: 'rulerframe',
        icon: {
            width: 16,
            height: 16,
            comps: [
                {
                    type: 'image',
                    name: 'symbols/toolbarIcon/rulerframe.json',
                    color: colorObject
                }
            ]
        },
        toolTip: '刻度尺',
        type: 'toggle',
        selected: true,
        action: function() {
            rulerFrame.getTopRulerConfig().visible = this.selected;
            rulerFrame.getLeftRulerConfig().visible = this.selected;
            rulerFrame.validateImpl();
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/zoom.svg'
            }]
        },
        toolTip: '放大',
        action: function(){
            g2d.zoomIn(true);
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/zip.svg'
            }]
        },
        toolTip: '缩小',
        action: function(){
            g2d.zoomOut(true);
        }
    }
];

load_toolbar_config = [
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/refresh.svg'
            }]
        },
        toolTip: '刷新',
        action: function() {
            graphView.fitContent (true);
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/realtime.svg'
            }]
        },
        toolTip: '实时数据',
        action: function() {
            showRealTimeDialog();
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/history.svg'
            }]
        },
        toolTip: '历史数据',
        action: function() {
            showHistoryDialog();
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/trend.svg'
            }]
        },
        toolTip: '历史趋势',
        action: function() {
            let slModel = graphView.sm().getSelection();
            if (slModel.size() === 0) {
                alert("请选择测点");
                return;
            }
            let nodeTagArr = [];
            slModel.forEach(function (item, index) {
                if (!item.getTag()) {
                    alert("当前节点没有配置测点名");
                    return;
                }
                nodeTagArr.push(item.getTag());
            });
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
        icon: 'symbols/toolbarIcon/export.json',
        toolTip: '打印',
        action: function() {
            var image = new Image();
            image.src = $(".diagramView canvas")[0].toDataURL("image/png");
            var div = document.createElement('div');
            div.appendChild(image);
            $(div).printArea();
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/screenshot.svg'
            }]
        },
        toolTip: '截图',
        action: function() {
            var image = new Image();
            image.src = $(".diagramView canvas")[0].toDataURL("image/png");
            var a = document.createElement('a');
            var event = new MouseEvent('click');
            a.download = fileName;
            a.href = image.src;
            a.dispatchEvent(event);
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/zoom.svg'
            }]
        },
        toolTip: '放大',
        action: function(){
            graphView.zoomIn(true);
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/zip.svg'
            }]
        },
        toolTip: '缩小',
        action: function(){
            graphView.zoomOut(true);
        }
    },
    {
        icon: {
            width: 16,
            height: 16,
            comps: [{
                type: 'image',
                name: 'symbols/toolbarIcon/fit.svg'
            }]
        },
        toolTip: '恢复原始大小',
        action: function() {
            graphView.fitContent (true);
        }
    }
];
