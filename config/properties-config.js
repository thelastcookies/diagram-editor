text_properties = [// 文本的属性
    {
        categoryName: '文本',
        name: 'text',
        displayName: '文本内容',
        accessType: 'style',
        editable: true
    },
    {
        categoryName: '文本',
        name: 'text.align',
        displayName: '水平对齐',
        accessType: 'style',
        editable: true,
        defaultValue: 'center',
        enum: {
            values: ['left', 'center', 'right']
        }
    },
    {
        categoryName: '文本',
        name: 'text.vAlign',
        displayName: '垂直对齐',
        accessType: 'style',
        editable: true,
        defaultValue: 'middle',
        enum: {
            values: ['top', 'middle', 'bottom']
        }
    },
    {
        categoryName: '文本',
        name: 'text.color',
        displayName: '文本颜色',
        accessType: 'style',
        valueType: 'color',
        editable: true
    },
    {
        categoryName: '文本',
        name: 'text.font',
        displayName: '字体大小',
        accessType: 'style',
        valueType: 'text',
        editable: true
    },
    // {
    //     categoryName: '文本',
    //     name: 'text.shadow',
    //     displayName: '阴影',
    //     accessType: 'style',
    //     valueType: 'boolean',
    //     editable: true
    // },
    // {
    //     categoryName: '文本',
    //     name: 'text.shadow.color',
    //     displayName: '阴影颜色',
    //     accessType: 'style',
    //     valueType: 'color',
    //     editable: true
    // },
    // {
    //     categoryName: '文本',
    //     name: 'text.shadow.blur',
    //     displayName: '阴影模糊',
    //     accessType: 'style',
    //     valueType: 'number',
    //     editable: true
    // },
    // {
    //     categoryName: '文本',
    //     name: 'text.shadow.offset.x',
    //     displayName: '阴影横偏移',
    //     accessType: 'style',
    //     valueType: 'number',
    //     editable: true
    // },
    // {
    //     categoryName: '文本',
    //     name: 'text.shadow.offset.y',
    //     displayName: '阴影纵偏移',
    //     accessType: 'style',
    //     valueType: 'number',
    //     editable: true
    // },
];

data_properties = [// 所有的节点都有的属性
    {
        name: 'id'
    },
    {
        name: 'name',
        displayName: '名称',
        editable: true
    },
    // {
    //     name: 'tag',// 设置了 name 属性，如果没有设置 accessType 则默认通过 get/setTag 来获取和设置 tag 值
    //     displayName: '标签',// 用于存取属性名的显示文本值，若为空则显示name属性值
    //     editable: true// 设置该属性是否可编辑
    // },


    // {
    //     name: 'label2',// 设置了 name 属性，如果没有设置 accessType 则默认通过 get/setTag 来获取和设置 tag 值
    //     displayName: '属性2',// 用于存取属性名的显示文本值，若为空则显示name属性值
    //     accessType: 'style',
    //     valueType: 'text',
    //     editable: true// 设置该属性是否可编辑
    // },


    // {
    //     name: '2d.editable',// 结合 accessType，则通过 node.s('2d.editable') 获取和设置该属性
    //     accessType: 'style',// 操作存取属性类型
    //     displayName: '可编辑',// 用于存取属性名的显示文本值，若为空则显示name属性值
    //     valueType: 'boolean',// 布尔类型，显示为勾选框
    //     editable: true// 设置该属性是否可编辑
    // },
    // {
    //     name: '2d.movable',
    //     displayName: '可移动',
    //     accessType: 'style',
    //     valueType: 'boolean',
    //     editable: true
    // },
];

threshold_properties = [// 节点的阈值属性设置
     {
        categoryName: '阈值设置',
        name: 'threshold',
        displayName: '阈值1',
        accessType: 'attr',
        valueType: 'number',
        editable: true
    },
    {
        categoryName: '阈值设置',
        name: 'moreThenThColor',
        displayName: '高于阈值1颜色',
        accessType: 'attr',
        editable: true,
        enum: {
            labels: ["", "绿色", "蓝色", "红色", "黄色", "黑色"],
            values: ['', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,0,0)', 'rgb(255,255,0)', 'rgb(100,100,100)']
        }
    },
    {
        categoryName: '阈值设置',
        name: 'lessThenThColor',
        displayName: '低于阈值1颜色',
        accessType: 'attr',
        editable: true,
        defaultValue: '',
        enum: {
            labels: ["", "绿色", "蓝色", "红色", "黄色", "黑色"],
            values: ['', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,0,0)', 'rgb(255,255,0)', 'rgb(100,100,100)']
        }
    },
    // {
    //     categoryName: '阈值设置',
    //     name: 'lessThenThColor',
    //     displayName: '低于阈值1颜色',
    //     accessType: 'attr',
    //     editable: true,
    //     defaultValue: '',
    //     enum: {
    //         labels: ["", "绿色", "蓝色", "红色", "黄色", "黑色"],
    //         values: ['', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,0,0)', 'rgb(255,255,0)', 'rgb(100,100,100)']
    //     }
    // }
];

node_properties = [// node 节点的属性
    {
        categoryName: '节点属性',
        name: 'parent',
        displayName: '父亲节点',
    },
    {
        categoryName: '节点属性',
        name: 'host',
        displayName: '宿主节点',
    },
    {
        categoryName: '节点属性',
        displayName: '宽度',
        name: 'width',
        valueType: 'number',
        getValue: function(data){
            return parseInt(data.getWidth());
        }
    },
    {
        categoryName: '节点属性',
        displayName: '高度',
        name: 'height',
        valueType: 'number',
        getValue: function(data){
            return parseInt(data.getHeight());
        }
    },
    {
        categoryName: '节点属性',
        displayName: '位置坐标X',
        name: 'position',
        getValue: function(data){
            return parseInt(data.getPosition().x);
        }
    },
    {
        categoryName: '节点属性',
        displayName: '位置坐标Y',
        name: 'position',
        getValue: function(data){
            return parseInt(data.getPosition().y);
        }
    },
    {
        categoryName: '节点属性',
        displayName: '角度',
        name: 'rotation',
        valueType: 'number',
        getValue: function(data) {
            return Math.round(data.getRotation() / Math.PI * 180) + '°';
        }
    }
];

group_properties = [// 组的属性
    {
        categoryName: '组',
        displayName: '展开',
        name: 'expanded',
        editable: true
    },
    {
        categoryName: '组',
        displayName: '类型',
        name: 'group.type',
        editable: true,
        accessType: 'style',
        enum: {
            values: [null, 'oval', 'circle', 'rect', 'roundRect']
        }
    },
    {
        categoryName: '组',
        displayName: '图片',
        name: 'group.image',
        accessType: 'style',
        editable: true
    },
    {
        categoryName: '组',
        displayName: '拉伸',
        name: 'group.image.stretch',
        editable: true,
        accessType: 'style',
        enum: {
            values: ['fill', 'uniform', 'centerUniform']
        }
    },
    {
        categoryName: '组',
        displayName: '边距',
        name: 'group.padding',
        editable: true,
        accessType: 'style',
        valueType: 'number'
    },
    {
        categoryName: '组',
        displayName: '顶边距',
        name: 'group.padding.top',
        editable: true,
        accessType: 'style',
        valueType: 'number'
    },
    {
        categoryName: '组',
        displayName: '底边距',
        name: 'group.padding.bottom',
        editable: true,
        accessType: 'style',
        valueType: 'number'
    },
    {
        categoryName: '组',
        displayName: '左边距',
        name: 'group.padding.left',
        editable: true,
        accessType: 'style',
        valueType: 'number'
    },
    {
        categoryName: '组',
        displayName: '右边距',
        name: 'group.padding.right',
        editable: true,
        accessType: 'style',
        valueType: 'number'
    },
    {
        categoryName: '组',
        displayName: '深度',
        name: 'group.depth',
        editable: true,
        accessType: 'style',
        valueType: 'number'
    },
    {
        categoryName: '组',
        displayName: '图案',
        name: 'group.border.pattern',
        editable: true,
        accessType: 'style',
        setValue: function(data, property, value, view){
            data.s('group.border.pattern', eval(value));
        },
        formatValue: function(value){
            return '[' + (value || '') + ']';
        }
    },
    {
        categoryName: '组',
        displayName: '边框宽度',
        name: 'group.border.width',
        editable: true,
        accessType: 'style',
        valueType: 'number'
    },
    {
        categoryName: '组',
        displayName: '线帽样式',
        name: 'group.border.cap',
        editable: true,
        accessType: 'style',
        enum: {
            values: ['butt', 'round', 'square']
        }
    },
    {
        categoryName: '组',
        displayName: '交汇样式',
        name: 'group.border.join',
        editable: true,
        accessType: 'style',
        enum: {
            values: ['bevel', 'round', 'miter']
        }
    },
    {
        categoryName: '组',
        displayName: '背景',
        name: 'group.background',
        editable: true,
        accessType: 'style',
        valueType: 'color'
    },
    {
        categoryName: '组',
        displayName: '渐进',
        name: 'group.gradient',
        editable: true,
        accessType: 'style',
        enum: {
            values: ['linear.southwest','linear.southeast','linear.northwest','linear.northeast',
                'linear.north','linear.south','linear.west','linear.east',
                'radial.center','radial.southwest','radial.southeast','radial.northwest','radial.northeast',
                'radial.north','radial.south','radial.west','radial.east',
                'spread.horizontal','spread.vertical','spread.diagonal','spread.antidiagonal',
                'spread.north','spread.south','spread.west','spread.east']
        }
    },
    {
        categoryName: '组',
        displayName: '渐进色   ',
        name: 'group.gradient.color',
        editable: true,
        accessType: 'style',
        valueType: 'color'
    },
    {
        categoryName: '组',
        displayName: '标题对齐',
        name: 'group.title.align',
        editable: true,
        accessType: 'style',
        enum: {
            values: ['left', 'center', 'right']
        }
    },
    {
        categoryName: '组',
        displayName: '标题颜色',
        name: 'group.title.color',
        accessType: 'style',
        valueType: 'color',
        editable: true
    },
    {
        categoryName: '组',
        displayName: '标题背景',
        name: 'group.title.background',
        accessType: 'style',
        valueType: 'color',
        editable: true
    },
    {
        categoryName: '组',
        displayName: '标题字体',
        name: 'group.title.font',
        accessType: 'style',
        editable: true,
        formatValue: function(value){
            return value || ht.Default.labelFont;
        }
    }
];

edge_properties = [// 连线的属性
    {
        name: 'body.color',
        displayName: '连线颜色',
        accessType: 'style',
        valueType: 'color',
        editable: true,
        defaultValue: 'rgb(255, 0, 0)',
    },
    {
        name: 'edge.width',
        displayName: '连线宽度',
        accessType: 'style',
        valueType: 'number',
        editable: true
    },
    {
        name: 'edge.dash',
        displayName: '虚线',
        accessType: 'style',
        valueType: 'boolean',
        defaultValue: true,
        editable: true
    },
    {
        // name: 'edge.dash.pattern',
        displayName: '虚线间隔',
        accessType: 'style',
        editable: true,
        getValue: function(data){
            return data.s('edge.dash.pattern');
        },
        setValue: function(data, property, value, view){
            data.s('edge.dash.pattern', value.split(","));
        },
    },
    {
        name: 'edge.dash.color',
        displayName: '虚线间隔颜色',
        accessType: 'style',
        valueType: 'color',
        defaultValue: 'rgb(0, 0, 0)',
        editable: true
    }
];

shape_properties = [// 折线的属性
    {
        name: 'shape.border.color',
        displayName: '折线颜色',
        accessType: 'style',
        valueType: 'color',
        editable: true
    },
    {
        name: 'shape.border.width',
        displayName: '折线宽度',
        accessType: 'style',
        valueType: 'number',
        editable: true
    },
    {
        name: 'shape.dash',
        displayName: '虚线',
        accessType: 'style',
        valueType: 'boolean',
        defaultValue: true,
        editable: true
    },
    {
        name: 'shape.dash.pattern',
        displayName: '虚线间隔',
        accessType: 'style',
        editable: true,
        getValue: function(data){
            return data.s('shape.dash.pattern');
        },
        setValue: function(data, property, value, view){
            data.s('shape.dash.pattern', value.split(","));
        },
    },
    {
        name: 'shape.dash.color',
        displayName: '虚线间隔颜色',
        accessType: 'style',
        valueType: 'color',
        defaultValue: 'rgb(0, 0, 0)',
        editable: true
    }
];

// 按钮图元的配置
button_properties = [
    {
        name: 'button.link',
        displayName: '链接',
        accessType: 'attr',
        valueType: 'text',
        editable: true
    },
    {
        name: 'label',
        displayName: 'Label内容',
        accessType: 'style',
        editable: true,
    },
    {
        name: 'label.font',
        displayName: 'Label字体',
        accessType: 'style',
        valueType: 'string',
        editable: true
    },
    {
        name: 'label.position',
        displayName: 'Label位置',
        accessType: 'style',
        valueType: 'string',
        editable: true,
        enum: {
            labels: ["上", "下", "中", "左", "右"],
            values: [3, 31, 17, 14, 20]
        }
    },
    {
        name: 'label.color',
        displayName: 'Label颜色',
        accessType: 'style',
        valueType: 'color',
        editable: true,
        defaultValue: 'rgb(255, 0, 0)'
    },
];

bus_properties = [// 母线的属性
    {
        name: 'node.width',
        displayName: '母线颜色宽度',
        accessType: 'attr',
        valueType: 'number',
        editable: true,
        defaultValue: 8
    }
];

node_color_properties = [//普通图元的初始颜色配置
    {
        name: 'line.color',
        displayName: '初始颜色',
        accessType: 'attr',
        valueType: 'color',
        editable: true,
        defaultValue: 'rgb(255, 0, 0)'
    }
];

m_point_properties = [//测点图元的配置项
    {
        name: 'node.tag',
        displayName: '标签',
        accessType: 'attr',
        valueType: 'text',
        editable: true// 设置该属性是否可编辑
    },
    {
        name: 'node.formula',
        displayName: '公式',
        accessType: 'attr',
        valueType: 'text',
        editable: true
    },
    {
        name: 'node.showName',
        displayName: '名称',
        accessType: 'attr',
        valueType: 'text',
        editable: true
    },
    {
        name: 'node.sn',
        displayName: '序列号',
        accessType: 'attr',
        valueType: 'text',
        editable: true
    },
    // {
    //     name: 'label',// 设置了 name 属性，如果没有设置 accessType 则默认通过 get/setTag 来获取和设置 tag 值
    //     displayName: '标签显示',// 用于存取属性名的显示文本值，若为空则显示name属性值
    //     accessType: 'style',
    //     valueType: 'text',
    //     editable: true// 设置该属性是否可编辑
    // },
    // {
    //     name: 'label',
    //     displayName: '进度条标签',
    //     accessType: 'style',
    //     valueType: 'text',
    //     editable: true,
    //     defaultValue: 0
    // },
    // {
    //     name: 'label.position',
    //     displayName: '进度条标签位置',
    //     accessType: 'style',
    //     editable: true,
    //     defaultValue: "上",
    //     enum: {
    //         labels: ["上", "下", "左", "右"],
    //         values: [3, 31, 14, 20]
    //     }
    // },
];

// 图元中含有 label 的设置
label_properties = [
    {
        name: 'node.label',
        displayName: '模板Label',
        accessType: 'attr',
        valueType: 'text',
        editable: true,
        defaultValue: ''
    }
];
// 部分图元中含有 单位 的设置
unit_properties = [
    {
        name: 'node.unit',
        displayName: '单位',
        accessType: 'attr',
        valueType: 'text',
        editable: true,
        defaultValue: 'unit'
    }
];
// 带有转向功能的图元的朝向设置
direction_properties = [
    {
        name: 'node.direction',
        displayName: '组件朝向',
        accessType: 'attr',
        valueType: 'text',
        editable: true,
        enum: {
            labels: ["向上", "向右", "向下", "向左"],
            values: ["up", "right", "down", "left"]
        },
        defaultValue: 'up'
    }
];
// 计量条的设置
zt_properties = [

    {
        name: 'bar.min',
        displayName: '进度条最小值',
        accessType: 'attr',
        editable: true,
        valueType: 'number',
    },
    {
        name: 'bar.max',
        displayName: '进度条最大值',
        accessType: 'attr',
        editable: true,
        valueType: 'number',
    }
];
