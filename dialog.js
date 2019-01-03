var serializerDialog = null;
var serializerInput = document.createElement('textarea');
serializerInput.style.resize = 'none';
var initSerializerDialog = function() {//创建一个对话框，内容为序列化结果
    serializerDialog = new ht.widget.Dialog();
    serializerDialog.setConfig({
        title: '序列化结果',
        content: serializerInput,
        closable: true,
        width: 320,
        height: 340,
        buttons: [{
            label: '关闭',
            action: function(button, e) {
                serializerDialog.hide();
            }
        },
        {
            label: '保存',
            action: function(button, e) {
                serializerDialog.hide();
            }
        }],
        buttonsAlign: 'right'//按钮居右排放
    });
};
var showSerializerDialog = function(content) {
    if (!serializerDialog) initSerializerDialog();

    serializerInput.innerHTML = content;

    serializerDialog.show();
};
