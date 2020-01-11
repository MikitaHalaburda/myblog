import React, { memo } from "react";
import { BaseButton } from "../../../../shared-components/Buttons";

const ActionButtons = ({ actionButtons }) => (
  <div>
    {actionButtons.map(({ callback, text }) => (
      <BaseButton key={text} onClick={callback} text={text} />
    ))}
  </div>
);

/* 
I know that that components never updates, 
why i cant return true in compare function to never call them? */
export default memo(ActionButtons, (prev, next) => {
  return false;
});
