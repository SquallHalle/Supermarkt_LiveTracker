import * as React from "react";
import { Toggle, FetchData } from "./index";

export const App = () => (
  <Toggle onToggle={on => console.log("on: ", on)}>
    <Toggle.On>The button is on</Toggle.On>
    <Toggle.Off>The button is off</Toggle.Off>
    <Toggle.Button />
    <FetchData />
  </Toggle>
);
