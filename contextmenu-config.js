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
                        url: "http://localhost/server/node-trend.php",
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
            let nodeArr = getNode (dm);
            $.ajax ({
                type: 'POST',
                url: "http://localhost/server/trend.php",
                data: {"nodeTagArray": nodeArr},
                dataType: "json",
                success: function (nodeData) {
                    console.log (nodeData);
                }
            });
        }
    },
    {
        label: "查看XX",
        fordata: 2
    }
];
