let tagChangeDialog = null,
    newPageDialog = null,
    savePageDialog = null,
    openPageDialog = null;


/**
 * initTagChangeDialog 点名批量替换弹出框初始化方法
 */
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
                    let tagSource = item.getNodeTag();
                    if (tagSource)
                        item.setNodeTag(tagSource.replace(sourceReg, targetStr));
                });
                tagChangeDialog.hide();
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};

/**
 * showTagChangeDialog 点名批量替换弹出框调用方法
 */
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

/**
 * initNewPageDialog 新建空白图纸初始化方法
 */
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
/**
 * showNewPageDialog 新建空白图纸调用方法
 */
let showNewPageDialog = function () {
    if (!newPageDialog) initNewPageDialog();

    newPageDialog.show();
};

/**
 * initOpenPageDialog 从文件打开图纸初始化方法
 */
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
/**
 * showOpenPageDialog 从文件打开图纸调用方法
 */
let showOpenPageDialog = function () {
    if (!openPageDialog) initOpenPageDialog();
    openPageDialog.show();
};

/**
 * fileLoadedCallback 文件读取后的回调函数
 * @param fileData 文件内容
 */
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

/**
 * initSavePageDialog 保存图纸初始化方法
 * @param content
 */
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

/**
 * showSavePageDialog 保存图纸调用方法
 * @param content
 */
let showSavePageDialog = function(content) {
    // if (!savePageDialog) initSavePageDialog(content);
    initSavePageDialog(content);
    // savePageDialog.getView().querySelector(".filename").value = dataModelStorage['fileName'];
    savePageDialog.show();
};
