ht.DataModel.prototype.setNodeStatusByValue = function(json) {
    let dm = this;
    json.forEach(item => {
        let node = dm.getDataByTag(item.nodeTag);
        let value = item.value;
        // 如果是 普通开关
        if (node instanceof ht.Node && node.a('node.type') === 'switch') {
            node.a('switch.powerOn', Boolean(value));
            node.a('switch.powerOff', !Boolean(value));
        }
        // 如果是 旋钮开关
        if (node instanceof ht.Node && node.a('node.type') === 'switch-ro') {
            node.a('rotatySwitch.bar', Boolean(value) ? 0 : 1.57);
        }
        // 如果是 Text
        if (node instanceof ht.Text) {
            node.s("text", value);
        }
        // 如果是 变色器件
        if (node instanceof ht.Node && node.a('node.bg')) {
            node.a('node.bg', value ? '#FF0000' : undefined);
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
};