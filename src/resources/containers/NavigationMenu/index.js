import React, { useState } from "react";
import Link from "react-router-dom/Link";

import MenuItem from "@material-ui/core/MenuItem";
import NavigationMenuComponent from "../../components/NavigationMenu";

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
    <NavigationMenuComponent
      toggleMenu={toggleMenu}
      anchorEl={anchorEl}
      menuItems={menuItems}
      renderMenuItem={renderMenuItem}
    />
  );
};

export default NavigationMenu;
