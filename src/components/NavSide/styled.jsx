import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = styled.nav`
  height: 100%;
  width: 7vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  padding-top: 20px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  padding-bottom: 25px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  &:hover {
    color: #f1f1f1;
  }
`;
export { Navbar, StyledLink };
