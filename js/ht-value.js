ht.DataModel.prototype.setNodeStatusByValue = function(json) {
    let dm = this;
    json.forEach(item => {
        let node = dm.getDataByNodeTag(item.nodeTag);
        let value = Number(item.value);
        node.forEach(function(node) {
            // 如果是 普通开关
            if (node instanceof ht.Node && node.a('node.type') === 'switch') {
                node.a('switch.powerOn', Boolean(value));
                node.a('switch.powerOff', !Boolean(value));
            }
            // 如果是 旋钮开关
            if (node instanceof ht.Node && node.a('node.type') === 'switch-ro') {
                node.a('rotatySwitch.bar', Boolean(value) ? 0 : 1.57);
            }
            // 如果是 断路器
            if (node instanceof ht.Node && node.a('node.type') === 'duanluqi') {
                node.a('node.stateToggle', Boolean(value));
            }
            // 如果是 柱状图元
            if (node instanceof ht.Node && node.a('node.type') === 'zt') {
                node.s('label') ? node.s('label', String(value)): '';
                if ((value > 0 && node.a('zt.dirt') === 'top') || value < 0 && node.a('zt.dirt') === 'bottom'){
                    node.a('zt.height', Math.abs(value) / (Number(node.a('zt.max')) - Number(node.a('zt.min'))));
                } else {
                    node.a('zt.height', 0);
                }
            }
            // 如果是 Text
            if (node instanceof ht.Text) {
                node.s("text", value);
            }
            // 如果是 变色器件
            if (node instanceof ht.Node && node.a('node.bg')) {
                node.a('node.bg', value ? '#FF0000' : '#00FF00');
            }
            // 如果是 主变1
            if (node instanceof ht.Node && node.a('node.type') === 'zb1') {
                node.a('zb1.yw1', value.yw1);
                node.a('zb1.yw2', value.yw2);
                node.a('zb1.rw', value.rw);
                node.a('zb1.dw', value.dw);
            }
            // 如果是 主变2
            if (node instanceof ht.Node && node.a('node.type') === 'zb2') {
                node.a('zb2.zbyw1', value.zbyw1);
                node.a('zb2.zbyw2', value.zbyw2);
                node.a('zb2.rzyw', value.rzyw);
                node.a('zb2.dw', value.dw);
            }
        });
    });
};

ht.DataModel.prototype.getDataByNodeTag = function(tag) {
    let dm = this,
        res = [];
    dm.each(function (item) {
        if (item.a('node.tag') === tag) res.push(item);
    });
    return res;
};

ht.DataModel.prototype.getNodeTags = function (){
    let dm = this,
    nodeArr = [];
    dm.each(data => {
        let tag = data.getTag();
        if(tag) {
            nodeArr.push(tag);
        }
    });
    return nodeArr;
};
