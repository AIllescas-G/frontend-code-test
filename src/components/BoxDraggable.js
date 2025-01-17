import React, { useRef, useEffect } from "react";
import interact from "interactjs";
import { observer } from "mobx-react-lite";

const BoxDraggable = observer(({ box }) => {
  const ref = useRef();

  useEffect(() => {
    const e = ref.current;

    interact(e).draggable({
      listeners: {
        move(event) {
          const newX = box.left + event.dx;
          const newY = box.top + event.dy;
          box.setPosition(newX, newY);
        },
      },
    });

    return () => interact(e).unset();
  }, [box]);

  return (
    <div
      ref={ref}
      className="box"
      style={{
        position: "absolute",
        width: box.width + "px",
        height: box.height + "px",
        backgroundColor: box.color,
        left: box.left + "px",
        top: box.top + "px",
        border: box.selected ? "2px solid black" : "none",
        cursor: "move",
        
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        box.toggleSelect();
      }}
    >
      {box.color.toUpperCase()}
    </div>
  );
});

export default BoxDraggable;
