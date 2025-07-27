import { DefaultDotOptions } from "./enums/DefaultDotOptions";
import { Errors } from "./enums/Errors";
import { DotOptions } from "./interfaces/IDotOptions";
import { GridSettings } from "./interfaces/IGridSettings";

export const DotGrid = (() => {

    let _options: DotOptions;
    let _gridSettings: GridSettings;
    let _canvas: HTMLCanvasElement;
    let _ctx: CanvasRenderingContext2D;
    let _cellSize: number;
    let _cols: number;
    let _rows: number;

    function _computeMargin(): number {
        return _options.margin ? _options.margin : _options.size;
    }

    function _drawDot(x: number, y: number): void {

    }

    function _drawGrid(): void {
        const margin = _computeMargin();
        let x = 0;
        let y = 0;
        for (let i = 0; i < _cols; i++) {
            x += margin;
        }
    }

    function _determineNumOfRows(): void {
        _rows = Math.floor(_gridSettings.height / _cellSize);
    }

    function _determineNumOfCols(): void {
        _cols = Math.floor(_gridSettings.width / _cellSize);
    }

    function _computeCellSize(): void {
        _cellSize = _options.size + (_computeMargin() * 2);
    }

    function _configureGridSettings(): void {
        _gridSettings = {
            width: _canvas.offsetWidth,
            height: _canvas.offsetHeight
        }
    }   

    function _validateDotOptions(dotOptions?: DotOptions): DotOptions {
        const defaultSize: number = DefaultDotOptions.SIZE;
        const defaultColor: string = DefaultDotOptions.COLOR;
        let options = dotOptions;
        if (!options) {
            options = { size: defaultSize, color: defaultColor, margin: defaultSize }
        }
        return options;
    }

    function draw(id: string, dotOptions?: DotOptions): void {
        const el = document.getElementById(id);
        if (el && el instanceof HTMLCanvasElement) {
            _canvas = el;
            _options = _validateDotOptions(dotOptions);
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