import React from "react";
import { observer } from "mobx-react-lite";

import Box from "./Box";

const Canvas = observer(({ store }) => {
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
           onMove={box.handleMove}
           onClick={box.handleClick}
         />
      ))}

    
    </div>
  );
});

export default Canvas;
