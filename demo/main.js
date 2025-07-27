import { DotGrid } from '../dist/module.js';

document.addEventListener("DOMContentLoaded", () => {

    const elements = {
        color: "dot-color-picker-control",
        size: "dot-size-input-control"
    }
    let options = {
        size: 5,
        color: "#00000",
        margin: 5
    }

    function listenForColorInputChanges() {
        document.getElementById(elements.color).addEventListener("change", (e) => {
            options.color = e.target.value;
        });
    }

    function setDefaults() {
        document.getElementById(elements.color).value = options.color;
        document.getElementById(elements.size).value = options.size;
    }

    function init() {
        setDefaults();
        DotGrid.draw("dot-grid");
        listenForColorInputChanges();
    }

    init();
  
});