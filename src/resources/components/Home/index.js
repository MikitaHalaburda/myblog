import React from "react";
import { BaseButton } from "../../shared-components/Buttons";

const HomeComponent = () => (
  <div>
    <BaseButton onClick={() => console.log("click")} text="Click" />
  </div>
);

export default HomeComponent;
