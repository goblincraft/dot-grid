var $fb5e5d8eab04c5ad$export$42c47edc575d3e8c = /*#__PURE__*/ function(DefaultDotOptions) {
    DefaultDotOptions[DefaultDotOptions["SIZE"] = 5] = "SIZE";
    DefaultDotOptions["COLOR"] = "#000000";
    return DefaultDotOptions;
}({});


var $2dc7572bb7648487$export$b8e9cd941e8016ac = /*#__PURE__*/ function(Errors) {
    Errors["NO_CANVAS"] = "No valid canvas found from given ID.";
    return Errors;
}({});


const $149c1bd638913645$export$2c5f62b7a29dcd9a = (()=>{
    let _options;
    let _gridSettings;
    let _canvas;
    let _ctx;
    let _cellWidth;
    let _cellHeight;
    let _cols;
    let _rows;
    function _computeMargin() {
        return _options.margin ? _options.margin : _options.size;
    }
    function _drawDot(x, y) {
        _ctx.beginPath();
        _ctx.arc(x, y, _options.size / 2, 0, Math.PI * 2, true);
        _ctx.fill();
    }
    function _drawGrid() {
        const margin = _computeMargin();
        let x = 0;
        let y = 0;
        for(let i = 0; i < _rows; i++){
            if (i === 0) y += margin;
            else y += margin * 2;
            x = 0;
            for(let j = 0; j < _cols; j++){
                x += margin;
                _drawDot(x, y);
                x += margin;
            }
        }
    }
    function _determineNumOfRows() {
        _rows = Math.floor(_gridSettings.height / _cellHeight);
    }
    function _determineNumOfCols() {
        _cols = Math.floor(_gridSettings.width / _cellWidth);
    }
    function _computeCellSize() {
        const fullSize = _options.size + _computeMargin() * 2;
        _cellWidth = fullSize / 2;
        _cellHeight = fullSize / 1.5;
    }
    function _configureGridSettings() {
        _gridSettings = {
            width: _canvas.offsetWidth,
            height: _canvas.offsetHeight
        };
    }
    function _validateDotOptions(dotOptions) {
        const defaultSize = (0, $fb5e5d8eab04c5ad$export$42c47edc575d3e8c).SIZE;
        const defaultColor = (0, $fb5e5d8eab04c5ad$export$42c47edc575d3e8c).COLOR;
        let options = dotOptions;
        if (!options) options = {
            size: defaultSize,
            color: defaultColor,
            margin: defaultSize
        };
        _options = options;
    }
    function _clearCanvas() {
        _ctx.clearRect(0, 0, _canvas.width, _canvas.height);
    }
    function _setupCanvas(el) {
        _canvas = el;
        _canvas.width = el.offsetWidth;
        _canvas.height = el.offsetHeight;
        _ctx = _canvas.getContext("2d");
        _ctx.fillStyle = _options.color;
        _ctx.strokeStyle = _options.color;
    }
    function draw(id, dotOptions) {
        const el = document.getElementById(id);
        if (el && el instanceof HTMLCanvasElement) {
            _validateDotOptions(dotOptions);
            _setupCanvas(el);
            _clearCanvas();
            _configureGridSettings();
            _computeCellSize();
            _determineNumOfCols();
            _determineNumOfRows();
            _drawGrid();
        } else throw Error((0, $2dc7572bb7648487$export$b8e9cd941e8016ac).NO_CANVAS);
    }
    return {
        draw: draw
    };
})();


export {$149c1bd638913645$export$2c5f62b7a29dcd9a as DotGrid};
//# sourceMappingURL=module.js.map
