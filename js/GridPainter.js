ht.graph.GridPainter = function(graphView, colorStatus) {
    var gv = this._gv = graphView;
    let cs = this._cs = {
        light: {
            mc: "rgb(208, 208, 208)",
            sc: "rgb(238, 238, 238)"
        },
        dark: {
            mc: "rgb(151, 151, 151)",
            sc: "rgb(161, 161, 161)"
        }
    }
    let cst = this._cst = colorStatus;
};
ht.Default.def(ht.graph.GridPainter, Object, {
    draw: function(g) {
        var self = this,
            gv = self._gv,
            defaultPhysicalGap = 20,
            zoom = gv.getZoom(),
            viewRect = gv.getViewRect();

        var gap = defaultPhysicalGap * zoom;

        gap = gap / zoom;
        var x = Math.round(viewRect.x),
            y = Math.round(viewRect.y),
            offsetX = x % gap,
            offsetY = y % gap,
            x = x - offsetX - gap,
            y = y - offsetY - gap,
            width = Math.round(viewRect.width) + gap * 2,
            height = Math.round(viewRect.height) + gap * 2,
            startX = x,
            endX = x + width,
            startY = y,
            endY = y + height,
            lineWidth = 1 / zoom,
            rowIndex = 0,
            columnIndex = 0;

        g.save();
        rowIndex = Math.floor(y / gap);
        columnIndex = Math.floor(x / gap);
        g.beginPath();
        g.lineWidth = lineWidth;
        // g.strokeStyle = "rgb(238, 238, 238)";
        this._cst === 'light' ? g.strokeStyle = this._cs.light.sc : g.strokeStyle = this._cs.dark.sc;
        for (var i = startX; i <= endX; i += gap) {
            if (columnIndex % 2 !== 0) {
                g.moveTo(i, startY);
                g.lineTo(i, startY + height);
            }
            columnIndex++;
        }
        for (var j = startY; j <= endY; j += gap) {
            if (rowIndex % 2 !== 0) {
                g.moveTo(startX, j);
                g.lineTo(startX + width, j);
            }
            rowIndex++;
        }
        g.stroke();

        rowIndex = Math.floor(y / gap);
        columnIndex = Math.floor(x / gap);
        g.beginPath();
        g.lineWidth = lineWidth;
        // g.strokeStyle = "rgb(208, 208, 208)";
        this._cst === 'light' ? g.strokeStyle = this._cs.light.mc : g.strokeStyle = this._cs.dark.mc;
        // g.strokeStyle = "rgb(151, 151, 151)";
        for (var i = startX; i <= endX; i += gap) {
            if (columnIndex % 2 === 0) {
                g.moveTo(i, startY);
                g.lineTo(i, startY + height);
            }
            columnIndex++;
        }
        for (var j = startY; j <= endY; j += gap) {
            if (rowIndex % 2 === 0) {
                g.moveTo(startX, j);
                g.lineTo(startX + width, j);
            }
            rowIndex++;
        }
        g.stroke();
        g.restore();
    },
    getColorStatus: function () {
        return this._cst;
    }
});
