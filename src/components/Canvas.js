import React from "react";
import { observer } from "mobx-react-lite";
import BoxDraggable from "./BoxDraggable";

const Canvas = observer(({ store }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "675px",
        backgroundColor: "aliceblue",
        overflow: "hidden",
      }}
     
    >
      {store.boxes.map((box) => (
        <BoxDraggable key={box.id} box={box} />
      ))}

    
    </div>
  );
});

export default Canvas;
