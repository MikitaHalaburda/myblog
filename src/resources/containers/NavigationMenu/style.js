import styled from "styled-components";
import NavLink from "react-router-dom/NavLink";

const CustomLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkLabel = styled.span`
  margin-left: 5px;
`;

export { CustomLink, LinkLabel };
