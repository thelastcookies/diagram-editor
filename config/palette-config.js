palette_config = {
    lines: {
        name: '接线与常用图形',
        items: [
            { name: '文字', image: '__text__', type: ht.Text},
            { name: '表格', image: 'symbols/palette-icon/basic/table-icon.json', type: ht.Node},
            // {name: '告警变色', image: 'symbols/palette-icon/basic/告警变色.json', type: ht.Node},
            // {name: '数据绑定', image: 'symbols/palette-icon/basic/数据绑定.json', type: ht.Node},
            // {name: '显示隐藏', image: 'symbols/palette-icon/basic/显示隐藏.json', type: ht.Node},
            { name: '光字牌', image: 'symbols/palette-icon/basic/光字牌.json', type: ht.Node},
            // {name: '坐标点', image: 'symbols/palette-icon/lines/坐标点.json', type: ht.Node},
            // {name: '接合点', image: 'symbols/palette-icon/lines/接合点.json', type: ht.Node},
            { name: '交叉线路连接', image: 'symbols/palette-icon/lines/交叉线路连接.json', type: ht.Node},
            // { name: '圆形', image: 'symbols/palette-icon/basic/圆形.json', type: ht.Node},
            { name: '按钮', image: 'symbols/palette-icon/sxjk/按钮.json', type: ht.Node},
            // {name: '按钮-测点', image: 'symbols/palette-icon/m-point/按钮-测点.json', type: ht.Node},
            // { name: '圆角矩形', image: 'symbols/palette-icon/basic/圆角矩形.json', type: ht.Node},
            // {name: '进度条', image: 'symbols/palette-icon/basic/进度条.json', type: ht.Node},
            { name: '刻度线', image: 'symbols/palette-icon/basic/刻度线.json', type: ht.Node},
            // {name: '返回按钮', image: 'symbols/palette-icon/basic/返回按钮.json', type: ht.Node},
            { name: '矩形', image: 'symbols/palette-icon/basic/矩形.json', type: ht.Node},
        ]
    },
    // ems: {
    //     name: 'EMS组态',
    //     items: [
    //         {name: '文本框', image: 'symbols/palette-icon/EMS/文本框.json', type: ht.Node},
    //         {name: '区域文本框', image: 'symbols/palette-icon/EMS/区域文本框.json', type: ht.Node},
    //         {name: '箭头', image: 'symbols/palette-icon/EMS/箭头.json', type: ht.Node},
    //         {name: '信号指示灯', image: 'symbols/palette-icon/EMS/信号指示灯.json', type: ht.Node},
    //         {name: '泵', image: 'symbols/palette-icon/EMS/泵.json', type: ht.Node},
    //         {name: '池/罐/箱', image: 'symbols/palette-icon/EMS/池.json', type: ht.Node},
    //         {name: '锅炉', image: 'symbols/palette-icon/EMS/锅炉.json', type: ht.Node},
    //         {name: '过滤器', image: 'symbols/palette-icon/EMS/过滤器.json', type: ht.Node},
    //         {name: '集水坑', image: 'symbols/palette-icon/EMS/集水坑.json', type: ht.Node},
    //         {name: '开关', image: 'symbols/palette-icon/EMS/开关.json', type: ht.Node},
    //         {name: '空压机-开关', image: 'symbols/palette-icon/EMS/空压机-开关.json', type: ht.Node},
    //         {name: '冷干机', image: 'symbols/palette-icon/EMS/冷干机.json', type: ht.Node},
    //         {name: '污水井-开关', image: 'symbols/palette-icon/EMS/污水井-开关.json', type: ht.Node},
    //         {name: '吸干机', image: 'symbols/palette-icon/EMS/吸干机.json', type: ht.Node},
    //         {name: '冷却塔', image: 'symbols/palette-icon/EMS/冷却塔.json', type: ht.Node},
    //         {name: '冷却水泵', image: 'symbols/palette-icon/EMS/冷却水泵.json', type: ht.Node},
    //         {name: '压力传感器', image: 'symbols/palette-icon/EMS/压力传感器.json', type: ht.Node},
    //         {name: '换热器', image: 'symbols/palette-icon/EMS/换热器.json', type: ht.Node},
    //         {name: '板式换热器', image: 'symbols/palette-icon/EMS/板式换热器.json', type: ht.Node},
    //         {name: '水冷机组', image: 'symbols/palette-icon/EMS/水冷机组.json', type: ht.Node},
    //         {name: '温度传感器', image: 'symbols/palette-icon/EMS/温度传感器.json', type: ht.Node},
    //         {name: '燃气锅炉', image: 'symbols/palette-icon/EMS/燃气锅炉.json', type: ht.Node},
    //         {name: '电动调节阀', image: 'symbols/palette-icon/EMS/电动调节阀.json', type: ht.Node},
    //         {name: '电动阀', image: 'symbols/palette-icon/EMS/电动阀.json', type: ht.Node},
    //         {name: '电磁阀', image: 'symbols/palette-icon/EMS/电磁阀.json', type: ht.Node},
    //         {name: '盘管', image: 'symbols/palette-icon/EMS/盘管.json', type: ht.Node},
    //         {name: '空调系统', image: 'symbols/palette-icon/EMS/空调系统.json', type: ht.Node},
    //         {name: '阀门', image: 'symbols/palette-icon/EMS/阀门.json', type: ht.Node},
    //         {name: '集水分水器', image: 'symbols/palette-icon/EMS/集水分水器.json', type: ht.Node},
    //         {name: '鼓风机', image: 'symbols/palette-icon/EMS/鼓风机.json', type: ht.Node},
    //
    //         {name: '粗格栅', image: 'symbols/palette-icon/EMS/粗格栅.json', type: ht.Node},
    //         {name: '细格栅', image: 'symbols/palette-icon/EMS/细格栅.json', type: ht.Node},
    //         {name: '调压器', image: 'symbols/palette-icon/EMS/调压器.json', type: ht.Node},
    //         {name: '进水', image: 'symbols/palette-icon/EMS/进水.json', type: ht.Node},
    //         {name: '流量计', image: 'symbols/palette-icon/EMS/流量计.json', type: ht.Node},
    //         {name: '提升泵阀门', image: 'symbols/palette-icon/EMS/提升泵阀门.json', type: ht.Node},
    //
    //         {name: '服务器', image: 'symbols/palette-icon/EMS/images/服务器.png', type: ht.Node},
    //         {name: '工作站', image: 'symbols/palette-icon/EMS/images/工作站.png', type: ht.Node},
    //         {name: '交换机', image: 'symbols/palette-icon/EMS/images/交换机.png', type: ht.Node},
    //         {name: '主磁盘阵列', image: 'symbols/palette-icon/EMS/images/主磁盘阵列.png', type: ht.Node},
    //         {name: '路由器', image: 'symbols/palette-icon/EMS/images/路由器.png', type: ht.Node},
    //         {name: '大屏幕显示', image: 'symbols/palette-icon/EMS/images/大屏幕显示.png', type: ht.Node},
    //         {name: '办公网', image: 'symbols/palette-icon/EMS/images/办公网.png', type: ht.Node},
    //         {name: '主网', image: 'symbols/palette-icon/EMS/images/主网.png', type: ht.Node},
    //         {name: '网络', image: 'symbols/palette-icon/EMS/images/网络.png', type: ht.Node},
    //         {name: '对时装置', image: 'symbols/palette-icon/EMS/images/对时装置.png', type: ht.Node},
    //         {name: '正向隔离装置', image: 'symbols/palette-icon/EMS/images/正向隔离装置.png', type: ht.Node},
    //         {name: '反向隔离装置', image: 'symbols/palette-icon/EMS/images/反向隔离装置.png', type: ht.Node},
    //         {name: '纵向加密认证装置', image: 'symbols/palette-icon/EMS/images/纵向加密认证装置.png', type: ht.Node},
    //         {name: '防火墙', image: 'symbols/palette-icon/EMS/images/防火墙.png', type: ht.Node},
    //
    //
    //     ]
    // },
    power: {
        name: '电路相关',
        items: [
            { name: '开关', image: 'symbols/palette-icon/sxjk/开关.json', type: ht.Node},
            // { name: '开关2', image: 'symbols/palette-icon/sxjk/开关2.json', type: ht.Node},
            { name: '断路器', image: 'symbols/palette-icon/sxjk/断路器.json', type: ht.Node},
            { name: '断路器设备', image: 'symbols/palette-icon/sxjk/断路器设备.json', type: ht.Node},
            { name: '手车', image: 'symbols/palette-icon/sxjk/手车.json', type: ht.Node},
            { name: '接地开关', image: 'symbols/palette-icon/sxjk/接地开关.json', type: ht.Node},
            // { name: '接地开关2', image: 'symbols/palette-icon/sxjk/接地开关2.json', type: ht.Node},
            { name: '负载', image: 'symbols/palette-icon/sxjk/负载.json', type: ht.Node},
            { name: '电抗', image: 'symbols/palette-icon/sxjk/电抗.json', type: ht.Node},
            { name: '放电间隙', image: 'symbols/palette-icon/sxjk/放电间隙.json', type: ht.Node},
            { name: '电缆', image: 'symbols/palette-icon/sxjk/电缆.json', type: ht.Node},
            { name: '避雷器', image: 'symbols/palette-icon/sxjk/避雷器.json', type: ht.Node},
            { name: '熔断器', image: 'symbols/palette-icon/sxjk/熔断器.json', type: ht.Node},
            { name: '接地', image: 'symbols/palette-icon/sxjk/接地.json', type: ht.Node},
            { name: '线圈', image: 'symbols/palette-icon/sxjk/线圈.json', type: ht.Node},
            { name: '消弧线圈', image: 'symbols/palette-icon/sxjk/消弧线圈.json', type: ht.Node},
            { name: '电阻', image: 'symbols/palette-icon/sxjk/电阻.json', type: ht.Node},
            { name: '电流互感器', image: 'symbols/palette-icon/sxjk/电流互感器.json', type: ht.Node},
            { name: '带电显示器', image: 'symbols/palette-icon/sxjk/接地负载.json', type: ht.Node},
            { name: '动态无功补偿', image: 'symbols/palette-icon/sxjk/动态无功补偿.json', type: ht.Node},
            { name: '接地避雷器', image: 'symbols/palette-icon/sxjk/接地避雷器.json', type: ht.Node},
            { name: '接地放电间隙', image: 'symbols/palette-icon/sxjk/接地放电间隙.json', type: ht.Node},
            { name: '接地电阻', image: 'symbols/palette-icon/sxjk/接地电阻.json', type: ht.Node},
            { name: '接地电阻2', image: 'symbols/palette-icon/sxjk/接地电阻2.json', type: ht.Node},
            { name: 'IGBT', image: 'symbols/palette-icon/sxjk/IGBT.json', type: ht.Node},
            { name: '远方就地信号', image: 'symbols/palette-icon/sxjk/远方就地信号.json', type: ht.Node},
            { name: '遥信信号', image: 'symbols/palette-icon/sxjk/遥信信号.json', type: ht.Node},
            { name: '硬压板', image: 'symbols/palette-icon/sxjk/硬压板.json', type: ht.Node},
            { name: '网络信号', image: 'symbols/palette-icon/sxjk/网络信号.json', type: ht.Node},

            { name: '星型变压器', image: 'symbols/palette-icon/sxjk/星型变压器.json', type: ht.Node},
            { name: '三角变压器', image: 'symbols/palette-icon/sxjk/三角变压器.json', type: ht.Node},
            { name: '接地变压器', image: 'symbols/palette-icon/sxjk/接地变压器.json', type: ht.Node},
            { name: '分接开关星型变压器', image: 'symbols/palette-icon/sxjk/分接开关星型变压器.json', type: ht.Node},
            { name: '开口三角变压器', image: 'symbols/palette-icon/sxjk/开口三角变压器.json', type: ht.Node},
            { name: '单绕组变压器', image: 'symbols/palette-icon/sxjk/单绕组变压器.json', type: ht.Node},
            { name: '双绕组变压器', image: 'symbols/palette-icon/sxjk/双绕组变压器.json', type: ht.Node},
            { name: '三绕组变压器', image: 'symbols/palette-icon/sxjk/三绕组变压器.json', type: ht.Node},
            { name: '四绕组变压器', image: 'symbols/palette-icon/sxjk/四绕组变压器.json', type: ht.Node},
            { name: '变压器常用接法', image: 'symbols/palette-icon/sxjk/变压器常用接法.json', type: ht.Node},
            { name: '变压器常用接法2', image: 'symbols/palette-icon/sxjk/变压器常用接法2.json', type: ht.Node},
        ]
    },
    // power: {
    //     name: '电路相关',
    //     items: [
    //         { name: '开关', image: 'symbols/palette-icon/m-point/开关.json', type: ht.Node},
    //         // { name: '开关-普通', image: 'symbols/palette-icon/m-point/开关-普通.json', type: ht.Node},
    //         { name: '断路器', image: 'symbols/palette-icon/m-point/断路器.json', type: ht.Node},
    //         // { name: '断路器-详细', image: 'symbols/palette-icon/m-point/断路器-详细.json', type: ht.Node},
    //         // { name: '断路器-FSL', image: 'symbols/palette-icon/m-point/断路器-FSL.json', type: ht.Node},
    //         { name: '手车', image: 'symbols/palette-icon/m-point/手车.json', type: ht.Node},
    //         { name: '刀闸', image: 'symbols/palette-icon/m-point/刀闸.json', type: ht.Node},
    //         { name: '接地开关', image: 'symbols/palette-icon/m-point/接地开关.json', type: ht.Node},
    //         { name: '接地开关2', image: 'symbols/palette-icon/lines/接地开关2.json', type: ht.Node},
    //
    //         { name: '负载', image: 'symbols/palette-icon/lines/负载.json', type: ht.Node},
    //         { name: '电抗', image: 'symbols/palette-icon/lines/电抗.json', type: ht.Node},
    //         { name: '放电间隙', image: 'symbols/palette-icon/lines/放电间隙.json', type: ht.Node},
    //         { name: '电缆', image: 'symbols/palette-icon/lines/电缆.json', type: ht.Node},
    //         { name: '避雷器', image: 'symbols/palette-icon/lines/避雷器.json', type: ht.Node},
    //         { name: '熔断器', image: 'symbols/palette-icon/lines/熔断器.json', type: ht.Node},
    //         { name: '接地', image: 'symbols/palette-icon/lines/接地.json', type: ht.Node},
    //         { name: '箭头', image: 'symbols/palette-icon/lines/箭头.json', type: ht.Node},
    //         { name: '线圈', image: 'symbols/palette-icon/lines/线圈.json', type: ht.Node},
    //         { name: '消弧线圈', image: 'symbols/palette-icon/lines/弧圈.json', type: ht.Node},
    //         { name: '电阻', image: 'symbols/palette-icon/lines/电阻.json', type: ht.Node},
    //         { name: '电流互感器', image: 'symbols/palette-icon/lines/电流互感器.json', type: ht.Node},
    //         { name: '灭磁开关', image: 'symbols/palette-icon/lines/灭磁开关.json', type: ht.Node},
    //         { name: '接地负载', image: 'symbols/palette-icon/lines/接地负载.json', type: ht.Node},
    //         { name: '接地避雷器', image: 'symbols/palette-icon/lines/接地避雷器.json', type: ht.Node},
    //         { name: '接地放电间隙', image: 'symbols/palette-icon/lines/接地放电间隙.json', type: ht.Node},
    //         { name: '接地方块', image: 'symbols/palette-icon/lines/接地方块.json', type: ht.Node},
    //         { name: '接地电流互感器', image: 'symbols/palette-icon/lines/接地电流互感器.json', type: ht.Node},
    //         { name: '接地线圈互感器', image: 'symbols/palette-icon/lines/接地线圈互感器.json', type: ht.Node},
    //         { name: '电容器', image: 'symbols/palette-icon/lines/电容器.json', type: ht.Node},
    //         { name: '电容器组', image: 'symbols/palette-icon/lines/电容器组.json', type: ht.Node},
    //         { name: '电压取样柜', image: 'symbols/palette-icon/lines/电压取样柜.json', type: ht.Node},
    //         { name: '动态无功补偿设备', image: 'symbols/palette-icon/lines/动态无功补偿设备.json', type: ht.Node},
    //
    //         { name: '交流发电机', image: 'symbols/palette-icon/transformer/交流发电机.json', type: ht.Node},
    //         { name: '星型变压器', image: 'symbols/palette-icon/transformer/星型变压器.json', type: ht.Node},
    //         { name: '三角变压器', image: 'symbols/palette-icon/transformer/三角变压器.json', type: ht.Node},
    //         { name: '接地变压器', image: 'symbols/palette-icon/transformer/接地变压器.json', type: ht.Node},
    //         { name: '分接开关星型变压器', image: 'symbols/palette-icon/transformer/分接开关星型变压器.json', type: ht.Node},
    //         { name: '开口三角变压器', image: 'symbols/palette-icon/transformer/开口三角变压器.json', type: ht.Node},
    //         { name: '电动机', image: 'symbols/palette-icon/transformer/电动机.json', type: ht.Node},
    //         { name: '单绕组变压器', image: 'symbols/palette-icon/transformer/单绕组变压器.json', type: ht.Node},
    //         { name: '双绕组变压器', image: 'symbols/palette-icon/transformer/双绕组变压器.json', type: ht.Node},
    //         { name: '三绕组变压器', image: 'symbols/palette-icon/transformer/三绕组变压器.json', type: ht.Node},
    //         { name: '四绕组变压器', image: 'symbols/palette-icon/transformer/四绕组变压器.json', type: ht.Node},
    //         { name: '变压器常用接法', image: 'symbols/palette-icon/transformer/变压器常用接法.json', type: ht.Node},
    //         { name: '变压器常用接法2', image: 'symbols/palette-icon/transformer/变压器常用接法2.json', type: ht.Node},
    //         { name: '取样变压器', image: 'symbols/palette-icon/transformer/取样变压器.json', type: ht.Node},
    //
    //         { name: '刀闸开关', image: 'symbols/palette-icon/lines/刀闸开关.json', type: ht.Node},
    //         { name: '二极管', image: 'symbols/palette-icon/lines/二极管.json', type: ht.Node},
    //         { name: '蓄电池组', image: 'symbols/palette-icon/lines/蓄电池组.json', type: ht.Node},
    //         { name: '熔断器-小', image: 'symbols/palette-icon/lines/熔断器-小.json', type: ht.Node},
    //         { name: '刀闸-详细', image: 'symbols/palette-icon/lines/刀闸-详细.json', type: ht.Node},
    //         { name: '逆变器', image: 'symbols/palette-icon/transformer/逆变器.json', type: ht.Node},
    //         { name: '静态开关模件', image: 'symbols/palette-icon/transformer/静态开关模件.json', type: ht.Node},
    //         { name: '调压稳压器', image: 'symbols/palette-icon/transformer/调压稳压器.json', type: ht.Node},
    //         { name: '塔点', image: 'symbols/palette-icon/zxa/塔点.json', type: ht.Node},
    //         { name: '塔点回线', image: 'symbols/palette-icon/zxa/塔点回线.json', type: ht.Node},
    //         { name: '塔点回线型2', image: 'symbols/palette-icon/zxa/塔点回线型2.json', type: ht.Node},
    //         { name: '风机模型', image: 'symbols/palette-icon/zxa/风机模型.json', type: ht.Node},
    //         { name: '线路标点', image: 'symbols/palette-icon/zxa/线路标点.json', type: ht.Node},
    //     ]
    // },
    steam: {
        name: '火电相关',
        items: [
            // { name: '状态标志', image: 'symbols/palette-icon/steam/状态标志.json', type: ht.Node},
            // { name: '指示灯', image: 'symbols/palette-icon/steam/指示灯.json', type: ht.Node},
            { name: '电动机', image: 'symbols/palette-icon/m-point/电动机.json', type: ht.Node},
            // { name: '泵-FSL', image: 'symbols/palette-icon/m-point/泵-FSL.json', type: ht.Node},
            { name: '泵', image: 'symbols/palette-icon/m-point/泵.json', type: ht.Node},
            // { name: '泵-普通', image: 'symbols/palette-icon/steam/泵-普通.json', type: ht.Node},
            { name: '电动阀', image: 'symbols/palette-icon/m-point/电动阀.json', type: ht.Node},
            { name: '电动阀-2', image: 'symbols/palette-icon/m-point/电动阀-2.json', type: ht.Node},
            { name: '气动阀', image: 'symbols/palette-icon/m-point/气动阀.json', type: ht.Node},
            { name: '气动阀-2', image: 'symbols/palette-icon/m-point/气动阀-2.json', type: ht.Node},
            { name: '电磁阀', image: 'symbols/palette-icon/m-point/电磁阀.json', type: ht.Node},
            { name: '液动阀', image: 'symbols/palette-icon/m-point/液动阀.json', type: ht.Node},
            // { name: '液动阀-FSL', image: 'symbols/palette-icon/m-point/液动阀-FSL.json', type: ht.Node},
            { name: '信号标志', image: 'symbols/palette-icon/m-point/信号标志.json', type: ht.Node},
            // { name: '故障指示', image: 'symbols/palette-icon/m-point/故障指示.json', type: ht.Node},
            // { name: '路吹灰组件-FSL', image: 'symbols/palette-icon/m-point/路吹灰组件-FSL.json', type: ht.Node},
            // { name: '开关-拟物', image: 'symbols/palette-icon/m-point/开关-拟物.json', type: ht.Node},
            { name: '犁煤器-MATE', image: 'symbols/palette-icon/m-point/犁煤器-MATE.json', type: ht.Node},

            { name: '截止阀', image: 'symbols/palette-icon/steam/截止阀.json', type: ht.Node},
            { name: '三通阀', image: 'symbols/palette-icon/steam/三通阀.json', type: ht.Node},
            { name: '四通阀', image: 'symbols/palette-icon/steam/四通阀.json', type: ht.Node},
            { name: '球阀', image: 'symbols/palette-icon/steam/球阀.json', type: ht.Node},
            { name: '蝶阀', image: 'symbols/palette-icon/steam/蝶阀.json', type: ht.Node},
            { name: '闸阀', image: 'symbols/palette-icon/steam/闸阀.json', type: ht.Node},
            { name: '止回阀', image: 'symbols/palette-icon/steam/止回阀.json', type: ht.Node},
            { name: '角阀', image: 'symbols/palette-icon/steam/角阀.json', type: ht.Node},

            // { name: '贮水槽', image: 'symbols/palette-icon/steam/贮水槽.json', type: ht.Node},
            // { name: '水罐', image: 'symbols/palette-icon/steam/水罐.json', type: ht.Node},
            // { name: '压力缸-左', image: 'symbols/palette-icon/steam/压力缸-左.json', type: ht.Node},
            // { name: '压力缸-右', image: 'symbols/palette-icon/steam/压力缸-右.json', type: ht.Node},
            // { name: '压力缸管道', image: 'symbols/palette-icon/steam/压力缸管道.json', type: ht.Node},
            // { name: '低压蒸汽缸', image: 'symbols/palette-icon/steam/低压蒸汽缸.json', type: ht.Node},
            // { name: '冷凝水箱', image: 'symbols/palette-icon/steam/冷凝水箱.json', type: ht.Node},
            { name: '流向', image: 'symbols/palette-icon/steam/流向.json', type: ht.Node},
            { name: '流入流出', image: 'symbols/palette-icon/steam/流入流出.json', type: ht.Node},
            { name: '压缩机', image: 'symbols/palette-icon/steam/压缩机.json', type: ht.Node},
            // { name: '辐射冷却剂', image: 'symbols/palette-icon/steam/辐射冷却剂.json', type: ht.Node},
            // { name: '低加', image: 'symbols/palette-icon/steam/低加.json', type: ht.Node},
            // { name: '疏水扩容器', image: 'symbols/palette-icon/steam/疏水扩容器.json', type: ht.Node},
            // { name: '过热器模板', image: 'symbols/palette-icon/steam/过热器模板.json', type: ht.Node},
            // { name: '除氧器', image: 'symbols/palette-icon/steam/除氧器.json', type: ht.Node},
            { name: '20', image: 'symbols/palette-icon/steam/20.json', type: ht.Node},
            { name: '21', image: 'symbols/palette-icon/steam/21.json', type: ht.Node},
            { name: '22', image: 'symbols/palette-icon/steam/22.json', type: ht.Node},
            { name: '23', image: 'symbols/palette-icon/steam/23.json', type: ht.Node},
            { name: '24', image: 'symbols/palette-icon/steam/24.json', type: ht.Node},
            // { name: '25', image: 'symbols/palette-icon/m-point/25.json', type: ht.Node},
            { name: '26', image: 'symbols/palette-icon/steam/26.json', type: ht.Node},
            // { name: '27', image: 'symbols/palette-icon/m-point/27.json', type: ht.Node},
            { name: '28', image: 'symbols/palette-icon/steam/28.json', type: ht.Node},
            { name: '29', image: 'symbols/palette-icon/steam/29.json', type: ht.Node},
            { name: '30', image: 'symbols/palette-icon/steam/30.json', type: ht.Node},
            { name: '31', image: 'symbols/palette-icon/steam/31.json', type: ht.Node},
            { name: '32', image: 'symbols/palette-icon/steam/32.json', type: ht.Node},
            { name: '33', image: 'symbols/palette-icon/steam/33.json', type: ht.Node},
            { name: '34', image: 'symbols/palette-icon/steam/34.json', type: ht.Node},
            { name: '35', image: 'symbols/palette-icon/steam/35.json', type: ht.Node},
            { name: '36', image: 'symbols/palette-icon/steam/36.json', type: ht.Node},
            { name: '37', image: 'symbols/palette-icon/steam/37.json', type: ht.Node},
            { name: '38', image: 'symbols/palette-icon/steam/38.json', type: ht.Node},
            { name: '39', image: 'symbols/palette-icon/steam/39.json', type: ht.Node},
            { name: '40', image: 'symbols/palette-icon/steam/40.json', type: ht.Node},
            { name: '41', image: 'symbols/palette-icon/steam/41.json', type: ht.Node},
            { name: 'DEH-1', image: 'symbols/palette-icon/DEH/01.png', type: ht.Node},
            { name: 'DEH-2', image: 'symbols/palette-icon/DEH/02.png', type: ht.Node},
            { name: 'DEH-3', image: 'symbols/palette-icon/DEH/03.png', type: ht.Node},
            { name: 'DEH-4', image: 'symbols/palette-icon/DEH/04.png', type: ht.Node},
            { name: 'DEH-5', image: 'symbols/palette-icon/DEH/05.png', type: ht.Node},
            { name: 'DEH-6', image: 'symbols/palette-icon/DEH/06.png', type: ht.Node},
            { name: 'DEH-7', image: 'symbols/palette-icon/DEH/07.png', type: ht.Node},
            { name: 'DEH-8', image: 'symbols/palette-icon/DEH/08.png', type: ht.Node},
            { name: 'DEH-9', image: 'symbols/palette-icon/DEH/09.png', type: ht.Node},
            // { name: 'DEH-指示灯', image: 'symbols/palette-icon/m-point/DEH-指示灯.json', type: ht.Node},
            // { name: '保护动作信号', image: 'symbols/palette-icon/m-point/保护动作信号.json', type: ht.Node},
            { name: '电动机-带序号', image: 'symbols/palette-icon/steam/电动机-带序号.json', type: ht.Node},
            { name: '恒温装置', image: 'symbols/palette-icon/steam/恒温装置.json', type: ht.Node},
            { name: 'MCC', image: 'symbols/palette-icon/steam/MCC.json', type: ht.Node},
            // { name: '手操', image: 'symbols/palette-icon/steam/手操.json', type: ht.Node},
            // { name: '手操-MA', image: 'symbols/palette-icon/m-point/手操-MA.json', type: ht.Node},
            { name: '风机与电机-简易', image: 'symbols/palette-icon/steam/风机与电机-简易.json', type: ht.Node},
            { name: '汽机与电机-详细', image: 'symbols/palette-icon/steam/风机与电机-详细.json', type: ht.Node},
            { name: '汽机与电机-系统总图', image: 'symbols/palette-icon/steam/风机与电机-系统总图.json', type: ht.Node},
            { name: '汽机与电机', image: 'symbols/palette-icon/steam/汽机与电机.json', type: ht.Node},
            { name: '汽机与电机1', image: 'symbols/palette-icon/steam/汽机与电机1.json', type: ht.Node},
            { name: '汽机与电机2', image: 'symbols/palette-icon/steam/汽机与电机2.json', type: ht.Node},
            { name: '汽机与电机-2DEH', image: 'symbols/palette-icon/steam/汽机与电机-2DEH.json', type: ht.Node},
            { name: '集箱-横-短', image: 'symbols/palette-icon/steam/集箱-横-短.json', type: ht.Node},
            { name: '集箱-横-长', image: 'symbols/palette-icon/steam/集箱-横-长.json', type: ht.Node},
            { name: '集箱-竖-短', image: 'symbols/palette-icon/steam/集箱-竖-短.json', type: ht.Node},
            { name: '集箱-竖-长', image: 'symbols/palette-icon/steam/集箱-竖-长.json', type: ht.Node},
            { name: '省煤器', image: 'symbols/palette-icon/steam/省煤器.json', type: ht.Node},
            { name: '筒（多处可用）', image: 'symbols/palette-icon/steam/锅筒.json', type: ht.Node},
            { name: '缸（多处可用）', image: 'symbols/palette-icon/steam/缸.json', type: ht.Node},
            { name: '罐（多处可用）', image: 'symbols/palette-icon/steam/罐.json', type: ht.Node},
            { name: '箱（多处可用）', image: 'symbols/palette-icon/steam/箱.json', type: ht.Node},
            { name: '收集器（多处可用）', image: 'symbols/palette-icon/steam/液体收集器.json', type: ht.Node},
            { name: '汽轮机', image: 'symbols/palette-icon/steam/汽轮机.json', type: ht.Node},
            { name: '汽轮机-2', image: 'symbols/palette-icon/steam/汽轮机-2.json', type: ht.Node},
            { name: '锅炉', image: 'symbols/palette-icon/steam/锅炉.json', type: ht.Node},
            { name: '原煤入口', image: 'symbols/palette-icon/steam/原煤入口.json', type: ht.Node},
            { name: '燃烧器火检', image: 'symbols/palette-icon/steam/燃烧器火检.json', type: ht.Node},
            { name: '高加', image: 'symbols/palette-icon/steam/高加.json', type: ht.Node},
            { name: '高加-2', image: 'symbols/palette-icon/steam/高加-2.json', type: ht.Node},
            { name: '高加-3', image: 'symbols/palette-icon/steam/高加-3.json', type: ht.Node},
            { name: '盘车', image: 'symbols/palette-icon/steam/盘车.json', type: ht.Node},
            { name: '冷油器', image: 'symbols/palette-icon/steam/冷油器.json', type: ht.Node},
            { name: '排油烟机', image: 'symbols/palette-icon/steam/排油烟机.json', type: ht.Node},
            { name: '油嘴', image: 'symbols/palette-icon/steam/油嘴.json', type: ht.Node},
            { name: '油箱', image: 'symbols/palette-icon/steam/油箱.json', type: ht.Node},
            { name: '分离器', image: 'symbols/palette-icon/steam/分离器.json', type: ht.Node},
            { name: '分离器-出口', image: 'symbols/palette-icon/steam/分离器-出口.json', type: ht.Node},
            { name: '锅炉-总', image: 'symbols/palette-icon/steam/锅炉-总.json', type: ht.Node},
            { name: '锅炉-排烟处理', image: 'symbols/palette-icon/steam/锅炉-排烟处理.json', type: ht.Node},
            { name: '除尘器', image: 'symbols/palette-icon/steam/除尘器.json', type: ht.Node},
            { name: '引风机', image: 'symbols/palette-icon/steam/引风机.json', type: ht.Node},
            { name: '烟囱', image: 'symbols/palette-icon/steam/烟囱.json', type: ht.Node},
            { name: '轴封风机', image: 'symbols/palette-icon/steam/轴封风机.json', type: ht.Node},
            { name: '旗', image: 'symbols/palette-icon/steam/旗.json', type: ht.Node},
            { name: '加热器', image: 'symbols/palette-icon/steam/加热器.json', type: ht.Node},
            { name: '高压主汽阀', image: 'symbols/palette-icon/steam/高压主汽阀.json', type: ht.Node},
            { name: '储气罐', image: 'symbols/palette-icon/steam/储气罐.json', type: ht.Node},
            { name: '气体收集器', image: 'symbols/palette-icon/steam/气体收集器.json', type: ht.Node},
            { name: '冷却塔风机', image: 'symbols/palette-icon/steam/冷却塔风机.json', type: ht.Node},
            { name: '除尘器灰斗', image: 'symbols/palette-icon/steam/除尘器灰斗.json', type: ht.Node},
            { name: '灰库双轴搅拌机', image: 'symbols/palette-icon/steam/灰库双轴搅拌机.json', type: ht.Node},
            { name: '钢灰库出口', image: 'symbols/palette-icon/steam/钢灰库出口.json', type: ht.Node},
            { name: '热网除污器', image: 'symbols/palette-icon/steam/热网除污器.json', type: ht.Node},
            { name: '滤油器', image: 'symbols/palette-icon/steam/滤油器.json', type: ht.Node},
            { name: '疏水单元', image: 'symbols/palette-icon/steam/疏水单元.json', type: ht.Node},
            { name: '石灰石仓', image: 'symbols/palette-icon/steam/石灰石仓.json', type: ht.Node},
            { name: '石灰石仓体', image: 'symbols/palette-icon/steam/石灰石仓体.json', type: ht.Node},
            { name: '石灰石仓电机', image: 'symbols/palette-icon/steam/石灰石仓电机.json', type: ht.Node},
            { name: '除氧器', image: 'symbols/palette-icon/steam/除氧器.json', type: ht.Node},
            { name: '滤网', image: 'symbols/palette-icon/steam/滤网.json', type: ht.Node},
            { name: '过滤器', image: 'symbols/palette-icon/steam/过滤器.json', type: ht.Node},
            { name: '汽水换热器', image: 'symbols/palette-icon/steam/汽水换热器.json', type: ht.Node},
            { name: '渣仓', image: 'symbols/palette-icon/steam/渣仓.json', type: ht.Node},
            { name: '锅炉冷渣机', image: 'symbols/palette-icon/steam/锅炉冷渣机.json', type: ht.Node},
            { name: '炉渣传送带', image: 'symbols/palette-icon/steam/炉渣传送带.json', type: ht.Node},
            { name: '炉渣传送电机', image: 'symbols/palette-icon/steam/炉渣传送电机.json', type: ht.Node},
            { name: '炉渣双轴搅拌机', image: 'symbols/palette-icon/steam/炉渣双轴搅拌机.json', type: ht.Node},
            { name: '除盐水加热器', image: 'symbols/palette-icon/steam/除盐水加热器.json', type: ht.Node},
            { name: '冷却器', image: 'symbols/palette-icon/steam/冷却器.json', type: ht.Node},
            { name: '废水池入口', image: 'symbols/palette-icon/steam/废水池入口.json', type: ht.Node},
            { name: '桨叶', image: 'symbols/palette-icon/steam/桨叶.json', type: ht.Node},
            { name: '精过滤器', image: 'symbols/palette-icon/steam/精过滤器.json', type: ht.Node},
            { name: '粗过滤器', image: 'symbols/palette-icon/steam/粗过滤器.json', type: ht.Node},
            { name: '含煤废水池', image: 'symbols/palette-icon/steam/含煤废水池.json', type: ht.Node},
            { name: '澄清池', image: 'symbols/palette-icon/steam/澄清池.json', type: ht.Node},
            { name: '石灰纯碱加药罐', image: 'symbols/palette-icon/steam/石灰纯碱加药罐.json', type: ht.Node},
            { name: '消防隔离', image: 'symbols/palette-icon/steam/消防隔离.json', type: ht.Node},
            { name: '普通隔离', image: 'symbols/palette-icon/steam/普通隔离.json', type: ht.Node},
            { name: '消防水池', image: 'symbols/palette-icon/steam/消防水池.json', type: ht.Node},
            { name: '药剂', image: 'symbols/palette-icon/steam/药剂.json', type: ht.Node},
            { name: '超滤装置', image: 'symbols/palette-icon/steam/超滤装置.json', type: ht.Node},
            { name: '生水加热器', image: 'symbols/palette-icon/steam/生水加热器.json', type: ht.Node},
            { name: '脱硫系统', image: 'symbols/palette-icon/steam/脱硫系统.json', type: ht.Node},
            { name: '粉剂仓', image: 'symbols/palette-icon/steam/粉剂仓.json', type: ht.Node},
            { name: '溶液泵', image: 'symbols/palette-icon/steam/溶液泵.json', type: ht.Node},
            { name: '风机', image: 'symbols/palette-icon/steam/风机.json', type: ht.Node},
            { name: '超滤水箱', image: 'symbols/palette-icon/steam/超滤水箱.json', type: ht.Node},
            { name: '空冷器', image: 'symbols/palette-icon/steam/空冷器.json', type: ht.Node},
            { name: '冷油器2', image: 'symbols/palette-icon/steam/冷油器2.json', type: ht.Node},
            { name: '水泵', image: 'symbols/palette-icon/steam/水泵.json', type: ht.Node},
            { name: '除渣传送带', image: 'symbols/palette-icon/steam/除渣传送带.json', type: ht.Node},
            { name: '冷渣器', image: 'symbols/palette-icon/steam/冷渣器.json', type: ht.Node},
            { name: '锅炉脱硫', image: 'symbols/palette-icon/steam/锅炉脱硫.json', type: ht.Node},
            { name: '皮带', image: 'symbols/palette-icon/steam/皮带.json', type: ht.Node},
            { name: '消化器', image: 'symbols/palette-icon/steam/消化器.json', type: ht.Node},
            // { name: '宁晋除灰-1', image: 'symbols/palette-icon/steam/宁晋除灰-1.json', type: ht.Node},
            // { name: '宁晋除灰-2', image: 'symbols/palette-icon/steam/宁晋除灰-2.json', type: ht.Node},
            // { name: '宁晋除灰-3', image: 'symbols/palette-icon/steam/宁晋除灰-3.json', type: ht.Node},
            // { name: '宁晋除灰-4', image: 'symbols/palette-icon/steam/宁晋除灰-4.json', type: ht.Node},
            // { name: '宁晋除灰-5', image: 'symbols/palette-icon/steam/宁晋除灰-5.json', type: ht.Node},
            // { name: '宁晋除灰-6', image: 'symbols/palette-icon/steam/宁晋除灰-6.json', type: ht.Node},
            // { name: '宁晋除灰-7', image: 'symbols/palette-icon/m-point/宁晋除灰-7.json', type: ht.Node},
            // { name: '宁晋除灰-8', image: 'symbols/palette-icon/m-point/宁晋除灰-8.json', type: ht.Node},
            // { name: '宁晋除灰-9', image: 'symbols/palette-icon/m-point/宁晋除灰-9.json', type: ht.Node},
            // { name: '宁晋除灰-10', image: 'symbols/palette-icon/m-point/宁晋除灰-10.json', type: ht.Node},
            // { name: '宁晋除灰-11', image: 'symbols/palette-icon/m-point/宁晋除灰-11.json', type: ht.Node},
            // { name: '宁晋除灰-12', image: 'symbols/palette-icon/m-point/宁晋除灰-12.json', type: ht.Node},
            // { name: '宁晋除灰-13', image: 'symbols/palette-icon/m-point/宁晋除灰-13.json', type: ht.Node},
            { name: '生活污水-池', image: 'symbols/palette-icon/steam/生活污水-池.json', type: ht.Node},
            { name: '生活污水-初沉池', image: 'symbols/palette-icon/steam/生活污水-初沉池.json', type: ht.Node},
            { name: '生活污水-调节池', image: 'symbols/palette-icon/steam/生活污水-调节池.json', type: ht.Node},
            { name: '氧化池', image: 'symbols/palette-icon/steam/氧化池.json', type: ht.Node},
            // { name: '振动器', image: 'symbols/palette-icon/m-point/振动器.json', type: ht.Node},
            { name: '锅炉出口', image: 'symbols/palette-icon/steam/锅炉出口.json', type: ht.Node},
            { name: '清灰风机', image: 'symbols/palette-icon/steam/清灰风机.json', type: ht.Node},
            { name: '液体送泵', image: 'symbols/palette-icon/steam/液体送泵.json', type: ht.Node},

        ]
    },
    others: {
        name: '其他',
        items: [
            // { name: '文本框-小', image: 'symbols/palette-icon/steam/文本框-小.json', type: ht.Node},
            // { name: '文本框-中', image: 'symbols/palette-icon/steam/文本框-中.json', type: ht.Node},
            // { name: '文本框-大', image: 'symbols/palette-icon/steam/文本框-大.json', type: ht.Node},
            // { name: '按钮', image: 'symbols/palette-icon/steam/按钮.json', type: ht.Node},
            // { name: '返回按键', image: 'symbols/palette-icon/steam/返回按键.json', type: ht.Node},

        ]
    },
};
