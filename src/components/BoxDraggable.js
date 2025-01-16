import React, { useRef, useEffect } from "react";
import interact from "interactjs";
import { observer } from "mobx-react-lite";

const BoxDraggable = observer(({ box }) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    interact(element).draggable({
      listeners: {
        move(event) {
          // Calcula las nuevas coordenadas
          const newX = box.left + event.dx;
          const newY = box.top + event.dy;

          // Usa la acción de MobX para actualizar
          box.setPosition(newX, newY);
        },
      },
    });

    return () => interact(element).unset(); // Limpia la configuración al desmontar
  }, [box]);

  return (
    <div
      ref={ref}
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
      onClick={(e) => {
        e.stopPropagation();
        box.toggleSelect();
      }}
    >
      {box.color.toUpperCase()}
    </div>
  );
});

export default BoxDraggable;
