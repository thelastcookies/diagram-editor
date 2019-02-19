var newPageDialog = null,
    savePageDialog = null,
    openPageDialog = null,
    nodeTrendDialog = null;

// var serializerInput = document.createElement('textarea');
// serializerInput.style.resize = 'none';

// 对话框新建图纸操作
var initNewPageDialog = function () {
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
                __fileName = null;
                __dataModel.clear();
                g2d.setDataModel(__dataModel);
                g2d.redraw();
                newPageDialog.hide();
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

// 对话框打开图纸操作
var initOpenPageDialog = function() {
    openPageDialog = new ht.widget.Dialog();
    openPageDialog.setConfig({
        title: '打开',
        content: '<input type="file" id = "openFile" />',
        closable: true,
        contentPadding: 10,
        buttons: [{
            label: '打开',
            action: function(button, e) {
                getFileAsJSON("openFile");
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

// 对话框保存图纸操作
var initSavePageDialog = function(content) {
    savePageDialog = new ht.widget.Dialog();
    savePageDialog.setConfig({
        title: '保存',
        content: __fileName !== null ? '文件名: <input class="filename" style="font-size: 14px;" value ="' + __fileName + '"/>' : '文件名: <input class="filename" style="font-size: 14px;" value =""/>',
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
                    __fileName = savePageDialog.getView().querySelector(".filename").value;
                    saveFileAsJSON (content, __fileName + ".cfd");
                    savePageDialog.hide ();
                }
                else
                    alert("Please Input File Name");
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

// 右键查看测点趋势操作
var initNodeTrendDialog = function (){
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
}


// 以下为供 index.html 调用的新建打开保存方法
var showNewPageDialog = function () {
    if (!newPageDialog) initNewPageDialog();

    newPageDialog.show();
};

var showOpenPageDialog = function () {
    if (!openPageDialog) initOpenPageDialog();

    openPageDialog.show();
};

var showSavePageDialog = function(content) {
    // if (!savePageDialog) initSavePageDialog(content);
    initSavePageDialog(content);
    savePageDialog.getView().querySelector(".filename").value = __fileName;
    savePageDialog.show();
};

var showNodeTrendDialog = function (nodeDataArr) {
    console.log(nodeDataArr);
    initNodeTrendDialog();

    let nodeName = "",
        timeStamp = [],
        yData = [],
        ledendData = [],
        title = "",
        series = [];
    // 取出时间轴
    nodeDataArr[0].forEach(function (item, index) {
        timeStamp.push(item.timeStamp);
    });
    nodeDataArr.forEach(function (item, index) {
        title += item[0].nodeTag + " ";
        ledendData.push(item[0].nodeTag);
        item.forEach(function (item, index) {
            yData.push(item.nodeValue);
        });
        series.push({
            name: item[0].nodeTag,
            type: 'line',
            data: yData
        });
        yData = [];
    });

    title += "变化曲线";

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
            data: timeStamp
        },
        yAxis: {},
        series: series
    });
};
