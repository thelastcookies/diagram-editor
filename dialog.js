var newPageDialog = null,
    savePageDialog = null,
    openPageDialog = null;
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
