import React, { useState } from "react";
import { observer } from "mobx-react";

function Toolbar({ store }) {

  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (event) => {
    store.boxes.forEach((box) => {
      setSelectedColor(event.target.value);
      if (box.selected) {
        box.setColor(event.target.value);
      }
    });
  };

  const handleRemoveBox = () => {
    store.removeSelectedBoxes(); 
  };


  return (
    <div className="toolbar">
      <button onClick={store.addCreteBox}>Add Box</button>
      <button
        onClick={handleRemoveBox}
        disabled={!store.isAnyBoxSelected()} 
      >
        Remove Box
      </button>

      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />

      <span className="status"
      > Elementos seleccionados: {store.selectedBoxColors().length}  / color: {store.selectedBoxColors()} </span>
    </div>
  );
}

export default observer(Toolbar);
