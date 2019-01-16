var newPageDialog = null,
    savePageDialog = null,
    openPageDialog = null;
// var serializerInput = document.createElement('textarea');
// serializerInput.style.resize = 'none';


var initNewPageDialog = function () {
    newPageDialog = new ht.widget.Dialog();
    newPageDialog.setConfig({
        title: '关闭',
        content: '<div style = "font-size: 16px; margin: 20px;">组态图尚未保存，确定关闭吗？</div>',
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
                var dm = new ht.DataModel();
                dm.deserialize({"v":"6.2.8","p":{"layers":["0",1],"autoAdjustIndex":true,"hierarchicalRendering":false},"d":[]});
                g2d.setDataModel(dm);
                g2d.redraw();
                newPageDialog.hide();
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};


var initSavePageDialog = function(content) {//创建一个对话框，内容为保存结果
    savePageDialog = new ht.widget.Dialog();
    savePageDialog.setConfig({
        title: '保存',
        content: '文件名: <input class="filename" style="font-size: 14px;">',
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
                var filename = savePageDialog.getView().querySelector(".filename").value;
                saveFileAsJSON (content, filename + ".cfd");
                savePageDialog.hide();
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};



var initOpenPageDialog = function() {//创建一个对话框，内容为保存结果
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



var showNewPageDialog = function () {
    if (!newPageDialog) initNewPageDialog();

    newPageDialog.show();
};

var showSavePageDialog = function(content) {
    if (!savePageDialog) initSavePageDialog(content);

    savePageDialog.show();
};

var showOpenPageDialog = function () {
    if (!openPageDialog) initOpenPageDialog();

    openPageDialog.show();
};
