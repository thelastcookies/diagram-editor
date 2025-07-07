// let progressSplit = null;
let mainView = null;

var index_contextmenu_config = [
    {
        label: "复制",
        fordata: 1,
        disabled: function () {
            let slCount = g2d.sm().getSelection();
            return !slCount.length;
        },
        action: function () {
            nodeListCopy();
        }
    },
    {
        label: "粘贴",
        fordata: 1,
        disabled: function () {
            return !slModelList.length;
        },
        action: function(item, e) {
            nodeListPaste(e);
        }
    },
    {

    }
];
