var contextmenu_config = [
    {
        label: "查看测点信息",
        fordata: 1
    },
    {
        label: "查看测点趋势",
        fordata: 1,
        action: function(item, event) {
            let slModel = graphView.sm().getSelection();
            if (slModel.length === 1) {
                slModel.toArray (function (item) {
                    let tag = item.getTag ();
                    $.ajax ({
                        type: 'POST',
                        url: "http://localhost/server/server.php",
                        data: {"nodeTag": tag},
                        dataType: "json",
                        success: function (nodeData) {
                            showNodeTrendDialog(nodeData);
                        }
                    });
                })
            }
        }
    },
    {
        label: "查看XX",
        fordata: 1
    },
    {
        label: "查看趋势",
        fordata: 2,
        action: function(item, event) {
            var serializerDialog = null;
            var serializerInput = document.createElement('textarea');
            serializerInput.style.resize = 'none';
            serializerDialog = new ht.widget.Dialog();
            serializerDialog.setConfig({
                title: '趋势',
                content: serializerInput,
                closable: true,
                width: 320,
                height: 340,
                buttons: [{
                    label: '关闭',
                    action: function(button, e) {
                        serializerDialog.hide();
                    }
                }],
                buttonsAlign: 'right'//按钮居右排放



            });

            serializerInput.innerHTML = "测点趋势";

            serializerDialog.show();
        }
    },
    {
        label: "查看XX",
        fordata: 2
    }
];
