import React from "react";
import { BaseButton } from "../../../../shared-components/Buttons";

const ActionButtons = ({ actionButtons }) => (
  <div>
    {actionButtons.map(({ callback, text }) => (
      <BaseButton key={text} onClick={callback} text={text} />
    ))}
  </div>
);

export default ActionButtons;
