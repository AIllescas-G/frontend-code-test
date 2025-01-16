import React from "react";
import BoxDraggable from "./BoxDraggable";

const Box = ({ box }) => {
  return (
    <BoxDraggable box={box}>
      <div style={{ color: "#fff", textAlign: "center", lineHeight: "100%" }}>
        {box.color.toUpperCase()}
      </div>
    </BoxDraggable>
  );
};

export default Box;
