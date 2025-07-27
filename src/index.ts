import { DefaultDotOptions } from "./enums/DefaultDotOptions";
import { Errors } from "./enums/Errors";
import { DotOptions } from "./interfaces/IDotOptions";
import { GridSettings } from "./interfaces/IGridSettings";

export const DotGrid = (() => {

    let _options: DotOptions;
    let _gridSettings: GridSettings;
    let _canvas: HTMLCanvasElement;
    let _ctx: CanvasRenderingContext2D;

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
            options = { size: defaultSize, color: defaultColor }
        }
        return options;
    }

    function draw(id: string, dotOptions?: DotOptions): void {
        const el = document.getElementById(id);
        _options = _validateDotOptions(dotOptions);
        if (el && el instanceof HTMLCanvasElement) {
            _canvas = el;
            _configureGridSettings();
        } else {
            throw Error(Errors.NO_CANVAS);
        }
    }

    return {
        draw: draw
    }

})();