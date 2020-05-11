ht.DataModel.prototype.setNodeStatusByValue = function(json) {
    let dm = this;
    json.forEach(item => {
        let node = dm.getDataByTag(item.nodeTag);
        let value = item.value;
        // 如果是 开关
        if (node instanceof ht.Node && node.a('switch.powerOff')) {
            node.a('switch.powerOn', Boolean(value));
            node.a('switch.powerOff', !Boolean(value));
        }
        // 如果是 Text
        if (node instanceof ht.Text) {
            node.s("text", value);
        }
        // 如果是 变色器件
        // 如果是 开关
        if (node instanceof ht.Node && node.a('node.bg')) {
            node.a('node.bg', value ? '#FF0000' : undefined);
        }
        // if (node instanceof ht.Node && node.a('node.threshold')) {
        //     let threshold = node.a ('node.threshold');
        //     let moreThenThColor = node.a ('node.moreThenThColor');
        //     let lessThenThColor = node.a ('node.lessThenThColor');
        //     // 颜色赋值
        //     if (parseFloat(nodeValue) > threshold) {
        //         // node.s('border.color', moreThenThColor);
        //         // if (node.a('enabled')) node.a ('enabled', true);
        //         // 文字节点颜色
        //         if (node instanceof ht.Text) node.s("text.color", moreThenThColor);
        //         if (node.a('numberColor')) node.a ('numberColor', moreThenThColor);
        //         // if (node.a('lineColor'))
        //         // if (node.a('lineColor')) node.a ('lineColor', moreThenThColor);
        //         node.a ('lineColor', moreThenThColor);
        //     }
        //     else {
        //         // 文字节点颜色
        //         if (node instanceof ht.Text) node.s("text.color", lessThenThColor);
        //         // node.s('border.color', lessThenThColor);
        //         // if (node.a('enabled')) node.a ('enabled', false);
        //         if (node.a('numberColor')) node.a ('numberColor', lessThenThColor);
        //         // if (node.a('lineColor'))
        //         // if (node.a('lineColor')) node.a ('lineColor', lessThenThColor);
        //         node.a ('lineColor', lessThenThColor);
        //     }
        // }
        // 如果是 主变
        if (node instanceof ht.Node && node.a('node.type') === 'zb2') {
            node.a('zb2.zbyw1', value.zbyw1);
            node.a('zb2.zbyw2', value.zbyw2);
            node.a('zb2.rzyw', value.rzyw);
            node.a('zb2.dw', value.dw);
        }
    });
}

