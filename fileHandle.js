function getFileAsJSON(fileDOMID) {
  	var file = document.getElementById(fileDOMID).files[0];
	if (!file)
		return;
	var reader = new FileReader();
	var result = null;

	// Handle progress, success, and errors
    reader.fileName = file.name.replace(".cfd", "");
    reader.result = result;
	reader.onprogress = updateProgress;
	reader.onload = loaded;
	reader.onerror = errorHandler;

  	// Read file into memory as UTF-16
  	reader.readAsText(file, "UTF-8");
}

function updateProgress(evt) {
	if (evt.lengthComputable) {
  	// evt.loaded and evt.total are ProgressEvent properties
  		var loaded = (evt.loaded / evt.total);
  		if (loaded < 1) {
  		  	// Increase the prog bar length
  		  	// style.width = (loaded * 200) + "px";
  		}
    }
}

function loaded(evt) {
	// Obtain the read file data
	if (evt) {
        try {
            this.result = JSON.parse(evt.target.result);
            // console.log (this.result);
            __fileName = this.fileName;
            __dataModel.clear();
            __dataModel.deserialize(this.result);
            // palette.validate();
            // initTreeView();
            // redraw();
            g2d.setDataModel(__dataModel);
            g2d.redraw();
            g2d.fitContent(true);
            treeView.setDataModel(__dataModel);
            treeView.redraw();
            propertyPane.getPropertyView().setDataModel(__dataModel);
            propertyPane.getPropertyView().redraw();
            openPageDialog.hide();
            // init();
        } catch (err) {
            alert ("所选文件无法解析：" + err);
            openPageDialog.hide();
        }
	}
	// Handle UTF-16 file dump
	// if(utils.regexp.isChinese(fileString)) {
	  //Chinese Characters + Name validation
	// }
	// else {
	    // run other charset test
	// }
	  // xhr.send(fileString)
	}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
	    // The file could not be read
	}
}


// 下载文件方法
var saveFileAsJSON = function (content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content], {type : 'application/json'});
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
};
