import React from "react";
import { BaseButton } from "../../../shared-components/Buttons";

const HomeComponent = ({ handleClick, hideEverything, ...props }) => (
  <div>
    <BaseButton onClick={handleClick} text="Click" />
    {!hideEverything && <h1>{props.message}</h1>}
  </div>
);

export default HomeComponent;
