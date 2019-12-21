import React, { useState } from "react";
import Link from "react-router-dom/Link";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "Blog", url: "/blog" },
  { label: "Contacts", url: "/contacts" }
];

const renderMenuItem = onClick => ({ label, url }) => (
  <MenuItem key={label}>
    <Link onClick={onClick} to={url}>
      {label}
    </Link>
  </MenuItem>
);

const NavigationMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const toggleMenu = event => setAnchorEl(event ? event.currentTarget : null);
  return (
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
};

export default NavigationMenu;
