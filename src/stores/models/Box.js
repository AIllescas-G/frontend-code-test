import { types } from "mobx-state-tree";

const BoxModel = types

  .model("Box", {
    id: types.identifier,
    width: 200,
    height: 100,
    color: "#rrggbb",
    left: 200,
    top: 100,
    selected: true,
  })

  .views(self => ({
  
  }))

   .actions(self => ({
    setPosition(x, y) {
      self.left = x;
      self.top = y;
    },

    toggleSelect() {
      self.selected = !self.selected;
    },

    setColor(newColor) {
      self.color = newColor;  // Cambia el color de la caja
    },

    
  }));
  
export default BoxModel;
