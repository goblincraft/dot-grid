var $fb5e5d8eab04c5ad$export$42c47edc575d3e8c = /*#__PURE__*/ function(DefaultDotOptions) {
    DefaultDotOptions[DefaultDotOptions["SIZE"] = 10] = "SIZE";
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
    let _cellSize;
    let _cols;
    let _rows;
    function _computeMargin() {
        return _options.margin ? _options.margin : _options.size;
    }
    function _drawDot(x, y) {}
    function _drawGrid() {
        const margin = _computeMargin();
        let x = 0;
        let y = 0;
        for(let i = 0; i < _cols; i++)x += margin;
    }
    function _determineNumOfRows() {
        _rows = Math.floor(_gridSettings.height / _cellSize);
    }
    function _determineNumOfCols() {
        _cols = Math.floor(_gridSettings.width / _cellSize);
    }
    function _computeCellSize() {
        _cellSize = _options.size + _computeMargin() * 2;
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
        return options;
    }
    function draw(id, dotOptions) {
        const el = document.getElementById(id);
        if (el && el instanceof HTMLCanvasElement) {
            _canvas = el;
            _options = _validateDotOptions(dotOptions);
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
