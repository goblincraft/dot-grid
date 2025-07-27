import { DotGrid } from '../dist/module.js';

document.addEventListener("DOMContentLoaded", () => {

    const elements = {
        grid: "dot-grid",
        color: "dot-color-picker-control",
        size: "dot-size-input-control"
    }
    let options = {
        size: 5,
        color: "#00000",
        margin: 5
    }

    function redrawGrid() {
        DotGrid.draw(elements.grid, options);
    }

    function updateOptions(option, value) {
        options[option] = value;
        redrawGrid();
    }

    function listenForSizeInputChanges() {
        document.getElementById(elements.size).addEventListener("change", (e) => {
            console.log(e.target.value);
            updateOptions("size", parseInt(e.target.value));
        });
    }

    function listenForColorInputChanges() {
        document.getElementById(elements.color).addEventListener("change", (e) => {
            updateOptions("color", e.target.value);
        });
    }

    function setDefaults() {
        document.getElementById(elements.color).value = options.color;
        document.getElementById(elements.size).value = options.size;
    }

    function init() {
        setDefaults();
        DotGrid.draw(elements.grid, options);
        listenForColorInputChanges();
        listenForSizeInputChanges();
    }

    init();
  
});