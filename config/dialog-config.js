let tagChangeDialog = null,
    newPageDialog = null,
    savePageDialog = null,
    openPageDialog = null,
    nodeTrendDialog = null,
    uploadPageDialog = null,
    emptyDialog = null,
    realTimeDialog = null,
    historyDialog = null;

// var serializerInput = document.createElement('textarea');
// serializerInput.style.resize = 'none';

// 替换预览方法，待开发
function initTagTreeView() {
    let tagTreeView = new ht.widget.TreeView(indexDataModel);
    // compTreeView.addTopPainter(true);
    compTreeView.setRowLineVisible(true);
    compTreeView.setRowLineColor('white');
    // 重载树组件上的文本显示
    compTreeView.getLabel = function (data) {
        if (data instanceof ht.Text) {
            return data.s('text');
        }
        else if (data instanceof ht.Shape) {
            return '折线';
        }
        else if (data instanceof ht.Edge) {
            return '连线';
        }
        return data.getName() || '节点'
    };

    // 重载树组件上的图标显示
    var oldGetIconFunc = compTreeView.getIcon;
    compTreeView.getIcon = function (data) {
        if (data instanceof ht.Text) {
            return 'symbols/text.json';
        } else if (data instanceof ht.Edge) {
            return 'symbols/line.json';
        } else if (data instanceof ht.Shape) {
            return 'symbols/polyline.json';
        }
        var img = data.getImage();
        return img ? img : oldGetIconFunc.apply(this, arguments);
    }
}

let initTagChangeDialog = function (content) {
    tagChangeDialog = new ht.widget.Dialog();
    tagChangeDialog.setConfig({
        title: '图元测点批量替换',
        content: content,
        closable: true,
        contentPadding: 10,
        buttons: [{
            label: '关闭',
            action: function(button, e) {
                tagChangeDialog.hide();
            }
        },{
            label: '替换',
            action: function(button, e) {
                let sourceStr = document.getElementById("source-str").value;
                let targetStr = document.getElementById("target-str").value;
                let sourceReg = new RegExp(sourceStr, 'g');
                let nodeArr = indexDataModel.getDatas();
                nodeArr.forEach(function (item) {
                    let tagSource = item.getTag();
                    item.setTag(tagSource.replace(sourceReg, targetStr));
                });
                tagChangeDialog.hide();
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

let showTagChangeDialog = function() {
    let content = `
        <div class="tag-exchange-container">
        <div class="tag-exchange-title">
            <span>请输入替换规则：将</span>
            <input type="text" id="source-str" />
            <span>替换为</span>
            <input type="text" id="target-str" />
        </div>
<!--        <div id="tag-exchange-result">-->
<!--            <div id="tag-exchange-source"></div>-->
<!--            <div id="tag-exchange-target"></div>-->
<!--        </div>-->
    `;
    if (!tagChangeDialog) initTagChangeDialog(content);

    tagChangeDialog.show();
};

// 对话框新建图纸操作
let initNewPageDialog = function () {
    newPageDialog = new ht.widget.Dialog();
    newPageDialog.setConfig({
        title: '关闭',
        content: '<div style = "font-size: 16px; margin: 20px;">尚未保存的修改会被丢弃，确定关闭吗？</div>',
        closable: true,
        contentPadding: 10,
        buttons: [{
            label: '取消',
            action: function(button, e) {
                newPageDialog.hide();
            }
        },{
            label: '确定',
            action: function(button, e) {
                indexDataModel.clear();
                g2d.setDataModel(indexDataModel);
                g2d.redraw();
                if (dataModelStorage['fileName'])
                    dataModelStorage['fileName'] = '';
                newPageDialog.hide();
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

let showNewPageDialog = function () {
    if (!newPageDialog) initNewPageDialog();

    newPageDialog.show();
};


// 对话框打开图纸操作
let initOpenPageDialog = function() {
    openPageDialog = new ht.widget.Dialog();
    openPageDialog.setConfig({
        title: '打开',
        content: '<input type="file" id = "openFile" />',
        closable: true,
        contentPadding: 10,
        buttons: [{
            label: '打开',
            action: function(button, e) {
                dataModelStorage['fileName'] = getFileAsJSON("openFile");
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

let showOpenPageDialog = function () {
    if (!openPageDialog) initOpenPageDialog();
    openPageDialog.show();
};

function fileLoadedCallback(fileData) {
    if (indexDataModel !== undefined) {
        dataModelStorage['fileName'] = fileData.fileName;
        indexDataModel.clear();
        indexDataModel.deserialize(fileData.fileData);

        if(g2d) {
            g2d.setDataModel (indexDataModel);
            g2d.redraw ();
            g2d.fitContent (true);
        }
        if(compTreeView) {
            compTreeView.setDataModel (indexDataModel);
            compTreeView.redraw ();
        }
        if (propertyPane) {
            propertyPane.getPropertyView ().setDataModel (indexDataModel);
            propertyPane.getPropertyView ().redraw ();
        }
        openPageDialog.hide();
    }
}

// 对话框保存图纸操作
let initSavePageDialog = function(content) {
    savePageDialog = new ht.widget.Dialog();
    savePageDialog.setConfig({
        title: '保存',
        content: dataModelStorage['fileName'] ? '文件名: <input class="filename" style="font-size: 14px;" value ="' + dataModelStorage['fileName'] + '"/>' : '文件名: <input class="filename" style="font-size: 14px;" value =""/>',
        closable: true,
        contentPadding: 10,
        buttons: [{
            label: '关闭',
            action: function(button, e) {
                savePageDialog.hide();
            }
        },{
            label: '保存',
            action: function(button, e) {
                if (savePageDialog.getView().querySelector(".filename").value) {
                    dataModelStorage['fileName'] = savePageDialog.getView().querySelector(".filename").value;
                    saveFileAsJSON (content, dataModelStorage['fileName'] + ".cfd");
                    savePageDialog.hide ();
                }
                else
                    alert("Please Input File Name");
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

let showSavePageDialog = function(content) {
    // if (!savePageDialog) initSavePageDialog(content);
    initSavePageDialog(content);
    // savePageDialog.getView().querySelector(".filename").value = dataModelStorage['fileName'];
    savePageDialog.show();
};


// 查看测点趋势操作
let initNodeTrendDialog = function (){
    nodeTrendDialog = new ht.widget.Dialog();
    nodeTrendDialog.setConfig({
        title: '测点趋势',
        content: '<div id="echarts-container" style="width: 600px;height:400px;"></div>',
        closable: true,
        contentPadding: 10,
        buttons: [{
            label: '关闭',
            action: function(button, e) {
                nodeTrendDialog.hide();
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

let showNodeTrendDialog = function (nodeDataArr) {
    console.log(nodeDataArr);
    initNodeTrendDialog();

    let nodeName = "",
        timestamp = [],
        yData = [],
        ledendData = [],
        title = "",
        series = [];
    // 设置x轴
    nodeDataArr[0].forEach(function (item, index) {
        timestamp.push(item.timestamp);
    });
    // 设置 title，lendendData，y轴，series。
    nodeDataArr.forEach(function (item, index) {
        title += item[0].nodeDesc + " ";
        ledendData.push(item[0].nodeDesc);
        item.forEach(function (item, index) {
            yData.push(item.nodeValue);
        });
        series.push({
            name: item[0].nodeDesc,
            type: 'line',
            data: yData
        });
        yData = [];
    });

    title += "趋势曲线";

    nodeTrendDialog.show();

    echarts.init(document.getElementById('echarts-container')).setOption({
        title: {
            text: "趋势曲线",
            x: 'left',
            align: 'right'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ledendData,
            x: 'right'
        },
        xAxis: {
            data: timestamp
        },
        yAxis: {},
        series: series
    });
};


// 对话框打开所需上传的文件
// let initUploadPageDialog = function() {
//     uploadPageDialog = new ht.widget.Dialog();
//     uploadPageDialog.setConfig({
//         title: '上传',
//         content: '<input type="file" id = "uploadFile" />',
//         closable: true,
//         contentPadding: 10,
//         buttons: [{
//             label: '上传',
//             action: function(button, e) {
//                 getFileAsJSON("uploadFile");
//             }
//         }],
//         buttonsAlign: 'right'//按钮居右排放
//     });
// };
//
// let showUploadPageDialog = function () {
//     if (!uploadPageDialog) initUploadPageDialog();
//
//     uploadPageDialog.show();
// };


// 实时数据
let initRealTimeDialog = function(content) {
    realTimeDialog = new ht.widget.Dialog();
    realTimeDialog.setConfig({
        title: '实时数据',
        content: content,
        width: 500,
        height: 300,
        closable: true,
        contentPadding: 10,
        buttons: [{
            label: '关闭',
            action: function(button, e) {
                realTimeDialog.hide();

            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

let showRealTimeDialog = function () {
        let content = '<table class = "table table-hover" id = "realTimeTable"><thead><tr><th>测点</th><th>值</th><th>时间标签</th></tr></thead><tbody>';
        // content += '<tr><th>power</th><td id = "realTimeValue">' + mainPowerValue + '</td><td id = "realTimeTime"></td></tr>';
        content += '</tbody></table>';

        if (!realTimeDialog) initRealTimeDialog(content);

        realTimeDialog.show();

        // getDataIntervalID = setInterval(function() {
        //     var date =  new Date();
        //     let year = date.getFullYear();
        //     let month = date.getMonth() + 1;
        //     let day = date.getDate();
        //     let hours = date.getHours();
        //     let minutes = date.getMinutes();
        //     let seconds = date.getSeconds();
        //     let time = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        //     console.log(time);
        //
        //     $("#realTimeValue").innerText = mainPowerValue;
        //
        //     $("#realTimeTime").innerText = time;
        //
        // }, 3000);
};


// 历史数据
let initHistoryDialog = function(title, content) {
    historyDialog = new ht.widget.Dialog();
    historyDialog.setConfig({
        title: title,
        content: content,
        width: 500,
        // height: 300,
        closable: true,
        contentPadding: 10,
        buttons: [{
            label: '关闭',
            action: function(button, e) {



                historyDialog.hide();

            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

let showHistoryDialog = function () {
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
    let title = "";
    let content = '';
    if (slModel.length !== 0) {
        $.ajax ({
            type: 'POST',
            url: "http://localhost/server/node-trend.php",
            data: {nodeTagArr: nodeTagArr},
            dataType: "json",
            success: function (nodeDataArr) {
                let nodeData = nodeDataArr[0];
                console.log(nodeData);

                content = '<table class = "table table-hover" id = "historyTable"><thead><tr><th>#</th><th>时间</th><th>值</th></tr></thead><tbody>';
                nodeData.forEach(function (item, index) {
                    content += '<tr><th>' + index + '</th><td>' + item.timestamp + '</td><td>' + item.nodeValue + '</td></tr>';
                });
                content += '</tbody></table>';
                title = nodeDataArr[0][0].nodeTag + " 历史数据";

                initHistoryDialog(title, content);
                historyDialog.show();
            }
        });
    }



};
