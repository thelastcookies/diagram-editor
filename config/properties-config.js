/**
 * 文本的属性
 * @type {*[]}
 */
text_properties = [
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
        displayName: '颜色',
        accessType: 'style',
        valueType: 'color',
        editable: true
    },
    {
        categoryName: '文本',
        name: 'text.shadow',
        displayName: '阴影',
        accessType: 'style',
        valueType: 'boolean',
        editable: true
    },
    {
        categoryName: '文本',
        name: 'text.shadow.color',
        displayName: '阴影颜色',
        accessType: 'style',
        valueType: 'color',
        editable: true
    },
    {
        categoryName: '文本',
        name: 'text.shadow.blur',
        displayName: '阴影模糊',
        accessType: 'style',
        valueType: 'number',
        editable: true
    },
    {
        categoryName: '文本',
        name: 'text.shadow.offset.x',
        displayName: '阴影横偏移',
        accessType: 'style',
        valueType: 'number',
        editable: true
    },
    {
        categoryName: '文本',
        name: 'text.shadow.offset.y',
        displayName: '阴影纵偏移',
        accessType: 'style',
        valueType: 'number',
        editable: true
    },
];

/**
 * 所有的节点都有的属性
 * @type {*[]}
 */
data_properties = [
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

    // {
    //     name: 'label2',// 设置了 name 属性，如果没有设置 accessType 则默认通过 get/setTag 来获取和设置 tag 值
    //     displayName: '属性2',// 用于存取属性名的显示文本值，若为空则显示name属性值
    //     accessType: 'style',
    //     valueType: 'text',
    //     editable: true// 设置该属性是否可编辑
    // },
    {
        name: 'parent',
        displayName: '父亲节点',
    },
    {
        name: 'host',
        displayName: '宿主节点',
    },
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

/**
 * 柱状图的特殊属性
 * @type {*[]}
 */
zt_properties = [
    {
        categoryName: '柱状图',
        name: 'label.opacity',
        displayName: '柱形图标签',
        accessType: 'style',
        valueType: 'boolean',
        editable: true,
        defaultValue: false
    },
    {
        categoryName: '柱状图',
        name: 'label',
        displayName: '柱形图标签',
        accessType: 'style',
        valueType: 'text',
        editable: true,
        defaultValue: 0
    },
    {
        categoryName: '柱状图',
        name: 'label.position',
        displayName: '柱形图标签位置',
        accessType: 'style',
        editable: true,
        defaultValue: "上",
        enum: {
            labels: ["上", "下", "左", "右"],
            values: [3, 31, 14, 20]
        }
    },
    {
        categoryName: '柱状图',
        name: 'zt.min',
        displayName: '柱形图最小值',
        accessType: 'attr',
        editable: true,
        valueType: 'number',
    },
    {
        categoryName: '柱状图',
        name: 'zt.max',
        displayName: '柱形图最大值',
        accessType: 'attr',
        editable: true,
        valueType: 'number',
    },
    {
        categoryName: '柱状图',
        name: 'zt.dirt',
        displayName: '柱状图朝向',
        accessType: 'attr',
        editable: true,
        defaultValue: "从下到上",
        enum: {
            labels: ["从下到上", "从上到下"],
            values: ["top", "bottom"]
        }
    }
]

/**
 * 表格的特殊属性
 * @type {*[]}
 */
table_properties = [
    {
        categoryName: '表格',
        displayName: '表格行数',
        valueType: 'number',
        editable: true,
        getValue: function (data) {
            return JSON.parse(data.a("table.dataSource")).length;
        },
        setValue: function(data, property, value, view){
            let oldData = JSON.parse(data.a("table.dataSource"));
            let oldLen = oldData.length;
            if (Number(value) === 0) value = 1;
            if (Number(value) === Number(oldLen))
                return;
            data.a("table.dataSource", JSON.stringify(new Array(value).fill({})));
        },
    },
    {
        categoryName: '表格',
        displayName: '表格列数',
        valueType: 'number',
        editable: true,
        getValue: function (data) {
            return JSON.parse(data.a("table.columns")).length;
        },
        setValue: function(data, property, value, view){
            let oldData = JSON.parse(data.a("table.columns"));
            let oldLen = oldData.length;
            if (Number(value) === 0) value = 1;
            if (Number(value) === Number(oldLen))
                return;
            for (let i = 1, len = Math.abs(value - oldLen); i <= len; i++) {
                value > oldLen ? oldData.push({"key": `column${oldLen + i}`}): oldData.pop();
            }
            data.a("table.columns", JSON.stringify(oldData));
        }
    },
    {
        categoryName: '表格',
        displayName: '表格列宽设定',
        valueType: 'text',
        editable: true,
        getValue: function (data) {
            let columns = JSON.parse(data.a("table.columns"));
            let arrTemp = [];
            columns.forEach(item => {
               arrTemp.push(item.width? item.width: 120);
            });
            let count = 1;
            let res = arrTemp.flatMap((item, index, arr) => {
                // if (index === 0) return [];
                // if (index === arr.length - 1){
                //     return count === 1 ? [item]: [`${item} * ${count}`];
                // }
                if (item === arr[index + 1]) {
                    count++;
                } else if (item !== arr[index + 1]) {
                    let res = count === 1 ? [item]: [`${item} * ${count}`];
                    count = 1;
                    return res;
                }
                return [];
            }).join(', ');
            return res;
        },
        setValue: function(data, property, value, view){
            let arrTemp = [], count = 0;
            let oldData = JSON.parse(data.a("table.columns"));
            try {
                arrTemp = value.split(',');
            } catch (e) {
                alert("列宽设置格式出错");
                return;
            }
            arrTemp.forEach((item, index) => {
                let arr = item.replace(/ /g, '').split('*');
                for (let i = 0; i < (Number(arr[1]) ? Number(arr[1]): 1); i++) {
                    if (count >= oldData.length)
                        return;
                    oldData[count]['width'] = Number(arr[0]);
                    count++;
                }
            });
            data.a("table.columns", JSON.stringify(oldData));
        }
    },
    {
        categoryName: '表格',
        name: "table.head.height",
        displayName: '表头行高',
        accessType: 'attr',
        valueType: 'number',
        editable: true,
    },{
        categoryName: '表格',
        name: "table.body.height",
        displayName: '表格行高',
        accessType: 'attr',
        valueType: 'number',
        editable: true,
    },
    {
        categoryName: '表格',
        name: "table.head.background",
        displayName: '表头背景色',
        accessType: 'attr',
        valueType: 'color',
        editable: true,
        // defaultValue: 'rgba(212,212,212, 1)'
    },
    {
        categoryName: '表格',
        name: "table.body.background",
        displayName: '表格背景色',
        accessType: 'attr',
        valueType: 'color',
        editable: true,
    },
    {
        categoryName: '表格',
        name: "table.border.width",
        displayName: '表格边框宽度',
        accessType: 'attr',
        valueType: 'number',
        editable: true,
    },
    {
        categoryName: '表格',
        name: "table.border.color",
        displayName: '表格边框颜色',
        accessType: 'attr',
        valueType: 'color',
        editable: true,
    },
    {
        categoryName: '表格',
        name: "table.columns",
        displayName: '表格列设置(JSON)',
        accessType: 'attr',
        valueType: 'Object',
        editable: true,
        defaultValue: [],
        setValue: function(data) {
            console.log(data);
        }
    },
    {
        categoryName: '表格',
        name: "table.dataSource",
        displayName: '表格数据设置(JSON)',
        accessType: 'attr',
        valueType: 'Object',
        editable: true,
        defaultValue: [],
    }
];

/**
 * 节点的阈值属性设置
 * @type {*[]}
 */
threshold_properties = [
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

/**
 * node 节点的属性
 * @type {*[]}
 */
node_properties = [
    {
        categoryName: '节点属性',
        displayName: '宽度',
        name: 'width',
        valueType: 'number',
        editable: true,
        getValue: function(data){
            return parseInt(data.getWidth());
        }
    },
    {
        categoryName: '节点属性',
        displayName: '高度',
        name: 'height',
        valueType: 'number',
        editable: true,
        getValue: function(data){
            return parseInt(data.getHeight());
        }
    },
    {
        categoryName: '节点属性',
        displayName: '中心位置坐标X',
        name: 'position',
        getValue: function(data){
            return parseInt(data.getPosition().x);
        }
    },
    {
        categoryName: '节点属性',
        displayName: '中心位置坐标Y',
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

/**
 * 组的属性
 * @type {*[]}
 */
group_properties = [
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

/**
 * 连线的属性
 * @type {*[]}
 */
edge_properties = [
    {
        name: 'edge.color',
        displayName: '连线颜色',
        accessType: 'style',
        valueType: 'color',
        editable: true
    },
    {
        name: 'edge.width',
        displayName: '连线宽度',
        accessType: 'style',
        valueType: 'number',
        editable: true
    }
];

/**
 * 折线的属性
 * @type {*[]}
 */
shape_properties = [
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
    }
];

/**
 *
 */
chart_properties = [
    {
        categoryName: '图表',
        displayName: '表格行数',
        valueType: 'number',
        editable: true,
        getValue: function (data) {
            return JSON.parse(data.a("table.dataSource")).length;
        },
        setValue: function(data, property, value, view){
            let oldData = JSON.parse(data.a("table.dataSource"));
            let oldLen = oldData.length;
            if (Number(value) === 0) value = 1;
            if (Number(value) === Number(oldLen))
                return;
            data.a("table.dataSource", JSON.stringify(new Array(value).fill({})));
        },
    },
    {
        categoryName: '表格',
        displayName: '表格列数',
        valueType: 'number',
        editable: true,
        getValue: function (data) {
            return JSON.parse(data.a("table.columns")).length;
        },
        setValue: function(data, property, value, view){
            let oldData = JSON.parse(data.a("table.columns"));
            let oldLen = oldData.length;
            if (Number(value) === 0) value = 1;
            if (Number(value) === Number(oldLen))
                return;
            for (let i = 1, len = Math.abs(value - oldLen); i <= len; i++) {
                value > oldLen ? oldData.push({"key": `column${oldLen + i}`}): oldData.pop();
            }
            data.a("table.columns", JSON.stringify(oldData));
        }
    },
];
