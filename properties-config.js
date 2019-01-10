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
        name: 'text.font',
        displayName: '字体',
        accessType: 'style',
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
    }
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
    {
        name: 'tag',// 设置了 name 属性，如果没有设置 accessType 则默认通过 get/setTag 来获取和设置 tag 值
        displayName: '标签',// 用于存取属性名的显示文本值，若为空则显示name属性值
        editable: true// 设置该属性是否可编辑                       
    }, 
    {
        name: 'label',// 设置了 name 属性，如果没有设置 accessType 则默认通过 get/setTag 来获取和设置 tag 值
        displayName: '属性1',// 用于存取属性名的显示文本值，若为空则显示name属性值
        accessType: 'style',
        valueType: 'text',
        editable: true// 设置该属性是否可编辑                       
    }, 
    {
        name: 'label2',// 设置了 name 属性，如果没有设置 accessType 则默认通过 get/setTag 来获取和设置 tag 值
        displayName: '属性2',// 用于存取属性名的显示文本值，若为空则显示name属性值
        accessType: 'style',
        valueType: 'text',
        editable: true// 设置该属性是否可编辑                       
    }, 
    {
        name: 'parent', 
        displayName: '父亲节点',
    },    
    {
        name: '2d.editable',// 结合 accessType，则通过 node.s('2d.editable') 获取和设置该属性
        accessType: 'style',// 操作存取属性类型
        displayName: '可编辑',// 用于存取属性名的显示文本值，若为空则显示name属性值
        valueType: 'boolean',// 布尔类型，显示为勾选框
        editable: true// 设置该属性是否可编辑  
    },
    {
        name: '2d.movable',
        displayName: '可移动',
        accessType: 'style',
        valueType: 'boolean',
        editable: true
    },
    {
        name: '2d.selectable',
        displayName: '可选中',
        accessType: 'style',
        valueType: 'boolean',
        editable: true
    },
    {       
        categoryName: '文本',
        displayName: '内容',
        name: 'label.color',        
        accessType: 'style',
        valueType: 'color',
        editable: true  
    },  
    {
        categoryName: '文本',
        displayName: '背景',
        name: 'label.background',        
        accessType: 'style',
        valueType: 'color',
        editable: true  
    }, 
    {
        categoryName: '文本',
        displayName: '字体',
        name: 'label.font',        
        accessType: 'style',
        editable: true,
        formatValue: function(value){
            return value || ht.Default.labelFont;
        }
    },
    {
        categoryName: '文本',
        displayName: '位置',
        name: 'label.position',        
        accessType: 'style',
        editable: true,
        slider: {
            min: 1,
            max: 55,
            step: 1
        }        
    },        
    {       
        categoryName: '文本',
        displayName: '横偏移',
        name: 'label.offset.x',        
        accessType: 'style',
        valueType: 'number',
        editable: true  
    },              
    {       
        categoryName: '文本',
        displayName: '纵偏移',
        name: 'label.offset.y',        
        accessType: 'style',
        valueType: 'number',
        editable: true  
    },    
    {
        categoryName: '文本',
        displayName: '角度',
        name: 'label.rotation',        
        accessType: 'style',
        editable: true,
        slider: {
            min: 0,
            max: Math.PI*2,
            step: Math.PI/180*5,
            getToolTip: function(){
                return Math.round(this.getValue() / Math.PI * 180) + '°';
            }
        }        
    },   
    {
        categoryName: '文本',
        displayName: '最大长度',
        name: 'label.max',        
        accessType: 'style',
        valueType: 'number',
        editable: true        
    },             
    {
        categoryName: '文本',
        displayName: '固定',
        name: 'label.position.fixed',        
        accessType: 'style',
        valueType: 'boolean',
        editable: true              
    }, 
    {
        categoryName: '文本',
        displayName: '透明度',
        name: 'label.opacity',        
        accessType: 'style',
        editable: true,
        slider: {
            min: 0,
            max: 1,
            step: 0.1
        }        
    },             
    {
        categoryName: '选中',
        displayName: '颜色',
        name: 'select.color',
        accessType: 'style',
        valueType: 'color',
        editable: true  
    },
    {
        categoryName: '选中',
        displayName: '宽度',
        name: 'select.width',
        accessType: 'style',
        valueType: 'number',
        editable: true  
    },
    {
        categoryName: '选中',
        displayName: '边距',
        name: 'select.padding',
        accessType: 'style',
        valueType: 'number',
        editable: true  
    },    
    {
        categoryName: '选中',
        displayName: '类型',
        name: 'select.type',                       
        editable: true,
        accessType: 'style',    
        enum: {
            values: ['rect', 'circle', 'oval', 'roundRect']
        }                     
    }
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
    }
];

node_properties = [// node 节点的属性
    {
        categoryName: 'Node 节点',
        displayName: '吸附',
        name: 'host'        
    },
    {
        categoryName: 'Node 节点',
        displayName: '图片',
        name: 'image',
        editable: true
    },            
    {
        categoryName: 'Node 节点',
        displayName: '位置',
        name: 'position',
        getValue: function(data){
            var position = data.getPosition();
            return 'x: ' + parseInt(position.x) + ', y: ' + parseInt(position.y); 
        }
    },            
    {
        categoryName: 'Node 节点',
        displayName: '宽度',
        name: 'width',
        valueType: 'number',
        editable: true                        
    }, 
    {
        categoryName: 'Node 节点',
        displayName: '高度',
        name: 'height',
        valueType: 'number',
        editable: true                        
    },
    {
        categoryName: 'Node 节点',
        displayName: '拉伸',
        name: 'image.stretch',
        editable: true,
        accessType: 'style',    
        enum: {
            values: ['fill', 'uniform', 'centerUniform']
        }         
    },        
    {
        categoryName: 'Node 节点',
        displayName: '角度',
        name: 'rotation',
        valueType: 'number',
        editable: true,
        slider: {
            min: 0,
            max: Math.PI*2,
            getToolTip: function(){
                return Math.round(this.getValue() / Math.PI * 180) + '°';
            }
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
        name: 'edge.width', 
        displayName: '宽度',
        accessType: 'style',
        valueType: 'number',        
        editable: true  
    },
    {
        name: 'edge.color',
        displayName: '颜色',
        accessType: 'style',
        valueType: 'color',
        editable: true  
    }            
];
