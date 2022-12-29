import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { styled, Box, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const StyledNavLink = styled(NavLink)({
  display: "flex",
  padding: "10px 10px",
  textDecoration: "none",
  "&:hover": {
    color: "#282A3A",
  },
  "&:focus": {
    color: "#282A3A",
  },
  color: "#6B728E",
});

const StyledBox = styled(Box)({
  display: "flex",
  marginLeft: "auto",
});

const Header = () => {
  return (
    <AppBar style={{ background: "#f7f8fd" }}>
      <Toolbar>
        <StyledNavLink to="/">
          <img
            src={"/images/logo1.png"}
            style={{ height: "70px", width: "80px" }}
          />
        </StyledNavLink>
        <StyledBox>
          <StyledNavLink to="/">HOME</StyledNavLink>
          <StyledNavLink to="/products">PRODUCTS</StyledNavLink>
          <StyledNavLink to="/about">ABOUT</StyledNavLink>
          <StyledNavLink to="/contact">CONTACT</StyledNavLink>
          <StyledNavLink to="/cart">
            <Badge badgeContent={17} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </StyledNavLink>
        </StyledBox>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
