import { onSnapshot, types } from "mobx-state-tree";
import uuid from "uuid/v4";
import getRandomColor from "../utils/getRandomColor";
import BoxModel from "./models/Box";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel)
  })

  .actions(self => {
    return {


      addCreteBox() {
        const newBox = BoxModel.create({
          id: uuid(),
          color: getRandomColor(),
          left: 0,
          top: 0,
          selected: false,
        });
        self.boxes.push(newBox)
      },

      toggleSelectBox(boxId) {
        const box = self.boxes.find(b => b.id === boxId);
        if (box) {
          box.toggleSelect();
        }
      },

      removeSelectedBoxes() {
        self.boxes = self.boxes.filter(box => !box.selected);
      },

    };
  })

  .views(self => ({
    selectedBoxColors() {
      return self.boxes.filter(box => box.selected).map(box => box.color + (' -> '));
    },

    isAnyBoxSelected() {
      return self.boxes.some(box => box.selected);
    }
  }));


const loadState = () => {
  const json = localStorage.getItem("mainStore");
  if (json) {
    return JSON.parse(json);
  }
};

const store = MainStore.create(loadState());
onSnapshot(store, snapshot => {
  localStorage.setItem("mainStore", JSON.stringify(snapshot));
});

export default store;
