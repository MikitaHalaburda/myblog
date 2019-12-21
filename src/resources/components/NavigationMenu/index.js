import React from "react";

import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

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
    <Button onClick={toggleMenu} variant="contained" color="primary">
      <MenuOutlinedIcon />
    </Button>
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
