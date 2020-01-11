import React, { useState } from "react";
import { CustomLink, LinkLabel } from "./style";
import { FaHome, FaEnvelope, FaBold } from "react-icons/fa";

import MenuItem from "@material-ui/core/MenuItem";
import NavigationMenuComponent from "../../components/NavigationMenu";

const menuItems = [
  { label: "Home", url: "/", exact: true, icon: <FaHome /> },
  { label: "Blog", url: "/blog", icon: <FaBold /> },
  { label: "Contacts", url: "/contacts", icon: <FaEnvelope /> }
];

const renderMenuItem = onClick => ({ label, url, icon, exact = false }) => (
  <MenuItem key={label}>
    <CustomLink
      exact={exact}
      onClick={onClick}
      to={url}
      activeStyle={{ color: "red" }}
    >
      {icon}
      <LinkLabel>{label}</LinkLabel>
    </CustomLink>
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
