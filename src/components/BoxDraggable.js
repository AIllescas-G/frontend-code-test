import React from "react";
import { observer } from "mobx-react";
import Draggable from "react-draggable";

function BoxDraggable(props) {

  const handleBoxClick = () => {
    props.onClick(props.box.id); 
  };

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    props.onMove(props.box.id, x, y); 
  };

  return (

    <Draggable 
      axis="both"
      handle=".handle"
      defaultPosition={{ x: props.box.left, y: props.box.top }}
      onDrag={handleDrag}
      position={{ x: props.box.left, y: props.box.top }}
    >
      <div
        onDoubleClick={handleBoxClick}
        className={props.box.selected ? "box box-selected box handle" : "box box handle"}
        style={{
          backgroundColor: props.box.color,
          width: props.box.width,
          height: props.box.height,
          zIndex: props.box.selected ? 100 : 0,
        }}
      >
        {props.box.selected ? " Change color / Delete " : "Box"}
      </div>
    </Draggable>

  );
}

export default observer(BoxDraggable);
