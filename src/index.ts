import { DefaultDotOptions } from "./enums/DefaultDotOptions";
import { Errors } from "./enums/Errors";
import { DotOptions } from "./interfaces/IDotOptions";
import { GridSettings } from "./interfaces/IGridSettings";

export const DotGrid = (() => {

    let _options: DotOptions;
    let _gridSettings: GridSettings;
    let _canvas: HTMLCanvasElement;
    let _ctx: CanvasRenderingContext2D;
    let _cellWidth: number;
    let _cellHeight: number;
    let _cols: number;
    let _rows: number;

    function _computeMargin(): number {
        return _options.margin ? _options.margin : _options.size;
    }

    function _drawDot(x: number, y: number): void { 
        _ctx.beginPath();
        _ctx.arc(x, y, _options.size/2, 0, Math.PI * 2, true);
        _ctx.fill();
    }

    function _drawGrid(): void {
        const margin = _computeMargin();
        let x = 0;
        let y = 0;
        for (let i = 0; i < _rows; i++) {
            if (i === 0) {
                y += margin;
            } else {
                y += margin * 2;
            }
            x = 0;
            for (let j = 0; j < _cols; j++) {
                x += margin;
                _drawDot(x, y);
                x += margin;
            }
        }
    }

    function _determineNumOfRows(): void {
        _rows = Math.floor(_gridSettings.height / _cellHeight);
    }

    function _determineNumOfCols(): void {
        _cols = Math.floor(_gridSettings.width / _cellWidth);
    }

    function _computeCellSize(): void {
        const fullSize = (_options.size + (_computeMargin() * 2));
        _cellWidth = fullSize / 2;
        _cellHeight = fullSize / 1.5;
    }

    function _configureGridSettings(): void {
        _gridSettings = {
            width: _canvas.offsetWidth,
            height: _canvas.offsetHeight
        }
    }   

    function _validateDotOptions(dotOptions?: DotOptions): void {
        const defaultSize: number = DefaultDotOptions.SIZE;
        const defaultColor: string = DefaultDotOptions.COLOR;
        let options = dotOptions;
        if (!options) {
            options = { size: defaultSize, color: defaultColor, margin: defaultSize }
        }
        _options = options;
    }

    function _setupCanvas(el: HTMLCanvasElement) {
        _canvas = el;
        _canvas.width = el.offsetWidth;
        _canvas.height = el.offsetHeight;
        _ctx = <CanvasRenderingContext2D>_canvas.getContext("2d");
        _ctx.fillStyle = _options.color;
        _ctx.strokeStyle = _options.color;
    }

    function draw(id: string, dotOptions?: DotOptions): void {
        const el = document.getElementById(id);
        if (el && el instanceof HTMLCanvasElement) {
            _validateDotOptions(dotOptions);
            _setupCanvas(el);
            _configureGridSettings();
            _computeCellSize();
            _determineNumOfCols();
            _determineNumOfRows();
            _drawGrid();
        } else {
            throw Error(Errors.NO_CANVAS);
        }
    }

    return {
        draw: draw
    }

})();