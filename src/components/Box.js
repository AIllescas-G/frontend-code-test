import React from "react";
import BoxDraggable from "./BoxDraggable";

function Box(props) {
  return (
    <BoxDraggable {...props}>
      <div> {props.color} </div>
    </BoxDraggable>
  );
}
export default Box;
