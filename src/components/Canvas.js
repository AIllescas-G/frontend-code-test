import React from "react";
import { observer } from "mobx-react";
import Box from "../components/Box";

function Canvas({ store }) {

  const handleMove = (boxId, x, y) => {
    const box = store.boxes.find(b => b.id === boxId);
    if (box) {
      box.setPosition(x, y);
    }
  };

  const handleClick = (boxId) => {
    store.toggleSelectBox(boxId);
  };


  return (
    <div className="canva">
      <div className="info">
        <p> ❋ Double click to select / deselect </p>
      </div>
      {store.boxes.map((box, index) => (

        <Box
          key={index}
          id={box.id}
          isselected={box.isselected}
          box={box}
          color={box.color}
          left={box.left}
          top={box.top}
          width={box.width}
          height={box.height}
          onMove={handleMove}
          onClick={handleClick}
        />

      ))}

    </div>
  );
}

export default observer(Canvas);