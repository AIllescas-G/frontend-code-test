import React, { useState } from "react";
import { observer } from "mobx-react";

const Toolbar = observer(({ store }) => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    store.boxes.forEach((box) => {
      if (box.selected) {
        box.setColor(newColor);
      }
    });
  };

  return (
    <div className="toolbar">
      <button onClick={() => store.addCreteBox()} className="toolbar-button">
        Agregar Caja
      </button>
      <button
        onClick={() => store.removeSelectedBoxes()}
        className="toolbar-button"
        disabled={!store.isAnyBoxSelected()}
      >
        Eliminar Caja
      </button>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        className="toolbar-color-picker"
      />
      <span className="toolbar-status">
        Seleccionadas: {store.selectedBoxColors().length} / Colores:{" "}
        {store.selectedBoxColors().join(" ")}
      </span>
    </div>
  );
});

export default Toolbar;
