/**
 * ht.DataModel 的扩展方法 by xwt
 * 依赖于 ht.js、identifier.js 与 math.js
 */

/**
 * ht.DataModel 的扩展方法
 * 根据数据对图元/组件进行颜色、状态改变
 * @param data - 传入的数据 json，要求与 DataModel 中的 'node.tag' 存在对应关系。
 */
ht.DataModel.prototype.setNodeStatusByValue = function (data) {
    let dm = this;
    data.forEach(item => {
        let node = dm.getDataByNodeTag(item.nodeTag);
        let value = item.value;
        if (value === "null") return;
        node.forEach(function (node) {
            if (node.a('node.cate') === 'm-point') {
                if (node.a('node.type') === 'data') {
                    let valueArr = node.a('node.label').split('.');
                    let decLen = 0;
                    decLen = valueArr[1] ? valueArr[1].length : 0;
                    node.a('node.label', Number(value).toFixed(decLen));
                    return;
                }
                if (node.a('node.type') === 'switch') {
                    // node.a('node.state', Boolean(Number(item.value)));
                    node.a('node.state', true);
                    // node.a('node.state', false);
                }
                if (node.a('node.type') === 'motor' ||
                    node.a('node.type') === 'value' ||
                    node.a('node.type') === 'pump' ||
                    node.a('node.type') === 'equip') {
                    if (item.value === "null") return;
                    // let va = Number("50529024").toString(2).split('').map(i => Number(i));
                    let va = Number(item.value).toString(2).split('').map(i => Number(i));
                    va = va.reverse().concat(new Array(32 - va.length).fill(0));
                    // node.a('node.data', va);
                    node.a('node.data', [0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]);
                    // node.a('node.data', [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0]); // T
                    // node.a('node.data', [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0]); //E
                    // node.a('node.data', [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0, 0]);
                    // node.a('node.data', [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0]); // 电动阀红
                    // node.a('node.data', [0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0]); // 电动阀绿
                    // node.a('node.data', [0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 电动机全变色 lv
                    // node.a('node.data', [0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 电动机全变色 hui
                    // node.a('node.data', [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 路吹灰 红
                    // node.a('node.data', [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 路吹灰 绿
                    // node.a('node.data', [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 路吹灰 黄
                    // node.a('node.data', [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 路吹灰 黄
                    // node.a('node.data', [0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // FSL
                    // node.a('node.data', [0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 犁煤器 红
                    // node.a('node.data', [0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 犁煤器 绿
                    // node.a('node.data', [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 犁煤器 黄
                    // node.a('node.data', [0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 振动器
                    // node.a('node.data', [0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0]); // 振动器
                }
                if (node.a('node.type') === 'p-bar') {
                    node.a('node.value', Number(item.value));
                }
            }
            // 如果是 Text
            if (node instanceof ht.Text) {
                value = Number(item.value);
                node.s("text", value.toFixed(2));
            }
            if (node instanceof ht.Node && node.a('node.type') === 'barChart') {

            }

        });
    });

    let barChartNode = dm.getDataByNodeTag('barChart')[0];
    if (barChartNode) {
        let tagArr = barChartNode.a('chart.data.series').split(',');
        let xAxisData = [], seriesData = [];
        tagArr.forEach(item => {
            json.forEach(subItem => {
               if (subItem.nodeTag === item) {
                   xAxisData.push(subItem.nodeDesc);
                   seriesData.push(subItem.value);
               }
            });
        });
        setPanelValue('bar-chart', xAxisData, seriesData);
    }
};

/**
 * ht.DataModel 的扩展方法
 * 重写的 getNodeByTag 方法，使用 'node.tag' 属性以及自带 tag 来查找组件。
 * @param tag - 进行匹配的 tag
 * @returns {[]} - 返回所有匹配到的 node
 */
ht.DataModel.prototype.getDataByNodeTag = function(tag) {
    let dm = this,
        res = [];
    dm.each(item => {
        if (item.a('node.tag') === tag) res.push(item);
        else if (item.getTag() === tag) res.push(item);
        else {}
    });
    return res;
};

ht.DataModel.prototype.getDataByNodeType = function(type) {
    let dm = this,
        res = [];
    dm.each(item => {
        if (item.a('node.type') === type) res.push(item);
    });
    return res;
};

ht.DataModel.prototype.removeDataByNodeTag = function (tag) {
}

ht.DataModel.prototype.removeDataByNodeType = function (type) {
    let dm = this,
        res = [];
    res = dm.getDataByNodeType(type);
    if (res.length)
        res.forEach(item => {
            this.remove(item);
        });
    return res;
};

/**
 * ht.DataModel 的扩展方法
 * 获取 DataModel 中所有含有 node.tag 属性的组件。
 * @param flag - 判断是否去重，flag 为 true 则去重。
 * @returns {[]} - 返回所有含有 node.tag 属性的组件数组
 */
ht.DataModel.prototype.getOriginNode = function (flag) {
    let dm = this,
        res = [],
        tagArr = [];
    flag = flag ? flag: false;
    dm.each(item => {
        if (flag) {
            if (item.a('node.tag') && tagArr.indexOf(item.a('node.tag')) < 0) {
                res.push(item);
                tagArr.push(item.a('node.tag'));
            }
        }
        else
            if (item.a('node.tag')) res.push(item);
    });
    return res;
};


/**
 * (Old)
 * ht.DataModel 的扩展方法
 * 获取 DataModel 中所有 tag(不重复)
 * @returns {[]}
 */
ht.DataModel.prototype.getNodeTags = function (){
    let dm = this,
    nodeArr = [];
    dm.each(data => {
        let tag = data.getTag();
        if(tag && nodeArr.indexOf(tag) < 0) {
            nodeArr.push(tag);
        }
    });
    return nodeArr;
};

ht.Node.prototype.getNodeTag = function () {
    let tag;
    if (this.a('node.type') === 'cb') {
        tag = this.a('node.tag.cb') + "|" + this.a('node.tag.sw');
    } else {
        tag = this.getTag() || this.a('node.tag');
    }
    return tag;
}

ht.Node.prototype.setNodeTag = function (tag) {
    if (this.a('node.type') === 'cb') {
        this.a('node.tag.cb', tag.split("|")[0]);
        this.a('node.tag.sw', tag.split("|")[1]);
    } else {
        this.setTag(tag);
        this.a('node.tag', tag);
    }
    return tag;
}

/**
 * ht.DataModel 的扩展方法
 * 针对图元/组件中包含公式（node.formula) 属性进行的预处理
 * 将 node 中的公式进行计算之后，虚拟一个 fakeTag 添加到含有公式的组件/图元的 node.tag 属性中，
 * 并以 {nodeTag: fakeTag, nodeDesc: formulaText, value: calResult} 的形式添加数据集中，
 * 以供 (func)setNodeStatusByValue 使用
 * @param json - 获取到的数据集
 * @param reg - 进行匹配的正则表达式
 * @returns {any[] | string} -
 */
ht.DataModel.prototype.formulaPreprocess = function (json, reg) {
    let dm = this,
        formulaNodeArr = [],
        resultArr = [];
    reg = reg? reg: /["'“”‘’][a-zA-Z0-9:_-]+["'“”‘’]/g;
    dm.each(item => {
        if (item.a('node.formula'))
            formulaNodeArr.push(item);
    });
    formulaNodeArr.forEach(item => {
        let formulaText = item.a('node.formula'),
            result = 0;
        let formulaFinal = formulaText.replace(reg, function (match) {
            let matchNoQM = match.replace(/["'“”‘’]/g, "");
            for (let i = 0, len = json.length; i < len; i++) {
                if (json[i].nodeTag === matchNoQM)
                    return json[i].value;
            }
        });
        try {
            result = math.eval(formulaFinal).toFixed(2);
        } catch (err) {
            console.error(`${formulaText} 公式解析错误`);
        }
        let fakeTag = 'NT-' + Identifier.uuid();
        item.a('node.tag', fakeTag);
        resultArr.push({
            nodeTag: fakeTag,
            nodeDesc: formulaText,
            value: result,
            timestamp: json[0].timestamp
        });
    });
    json = json.concat(resultArr);
    return json;
};
