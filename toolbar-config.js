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
                new CreateEdgeInteractor(g2d, 'h.v')
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
    }
];

toolbar_config_right = [
    {
        icon: 'symbols/toolbarIcon/export.json',
        toolTip: '新建',
        action: function() {
            showNewPageDialog();

        }
    },
    {
        icon: 'symbols/toolbarIcon/export.json',
        toolTip: '打开',
        action: function() {
            showOpenPageDialog();
        }
    },
    {
        icon: 'symbols/toolbarIcon/export.json',
        toolTip: '保存',
        action: function() {
            showSavePageDialog(dataModel.serialize(2));
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
        icon: 'symbols/toolbarIcon/zoom-in.json',
        toolTip: '放大',
        action: function(){
            g2d.zoomIn(true);
        }
    },
    {
        icon: 'symbols/toolbarIcon/zoom-out.json',
        toolTip: '缩小',
        action: function(){
            g2d.zoomOut(true);
        }
    }
];
