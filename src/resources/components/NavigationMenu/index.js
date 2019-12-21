import React from "react";

import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Menu from "@material-ui/core/Menu";
import { BaseButton } from "../../shared-components/Buttons";

/* 
    TODO: 
        1) What is about to wrap toggleMenu into useCallback
        2) Does it make sense to use React.memo here?
*/
const NavigationMenuComponent = ({
  toggleMenu,
  anchorEl,
  menuItems,
  renderMenuItem
}) => (
  <nav>
    <BaseButton onClick={toggleMenu} text={<MenuOutlinedIcon />} />
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => toggleMenu(null)}
    >
      {menuItems.map(renderMenuItem(() => toggleMenu(null)))}
    </Menu>
  </nav>
);

export default NavigationMenuComponent;
