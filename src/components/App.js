import React from "react";
import { observer } from "mobx-react";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";
import store from "../stores/MainStore";

const App = observer(() => (
  <div className="app">
    <Toolbar store={store} />
    <Canvas store={store} />
  </div>
));

export default App;