import React, { useCallback } from "react";

import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Menu from "@material-ui/core/Menu";
import { BaseButton } from "../../../shared-components/Buttons";

const NavigationMenuComponent = ({
  toggleMenu,
  anchorEl,
  menuItems,
  renderMenuItem
}) => {
  const handleToggleMenu = useCallback(toggleMenu, []);
  const buttonText = useCallback(<MenuOutlinedIcon />, []);
  return (
    <nav>
      <BaseButton onClick={handleToggleMenu} text={buttonText} />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => toggleMenu(null)}
      >
        {menuItems.map(renderMenuItem(() => toggleMenu(null)))}
      </Menu>
    </nav>
  );
};

export default NavigationMenuComponent;
