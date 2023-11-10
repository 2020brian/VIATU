import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  background-color: green;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-radius: 4px;
`;

const Logo = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled(RouterLink)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const CartIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const LinksContainer = styled.div`
  margin-left: auto;
  display: flex;
`;

function Navbar({ cartLength, isLoggedIn, onLogout }) {
  const handleLogout = () => {
    if (isLoggedIn ) {
      onLogout();
    }
  };
  return (
    <Nav>
      <Logo>
        <NavLink to="/">Viatu</NavLink>
      </Logo>
      <LinksContainer>
        <List>
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
          <NavLink to="/orders" >Orders</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contact">Contact</NavLink>
          </ListItem>
          
          
        </List>

      </LinksContainer>
      
       <NavLink style={{padding:"20px"}} to="/login" onClick={handleLogout}>{isLoggedIn? "Logout":"Login"}</NavLink>
         
      <NavLink to="/cart" className="length">
        <CartIcon id="ca" icon={faShoppingCart} size="lg" />
        <p id="count">{cartLength}</p>
      </NavLink>
      
    </Nav>
  );
}

export default Navbar;
