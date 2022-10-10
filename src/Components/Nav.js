import React from "react";
import house from "../../src/Assets/Images/house.png";
import menu from "../../src/Assets/Images/menu.png";
import location from "../../src/Assets/Images/location.png";
import exit from "../../src/Assets/Images/exit.png";
import cart from "../../src/Assets/Images/cart.png";
import logo from "../../src/Assets/Images/logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
  background: #0c0b0b;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  margin-top: 2rem;
  margin-right:;
  position:fixed;
  width:10%;
  box-shadow: 10px 10px 29px black;

  .nav-image {
    width:27%;
    margin-top: 3rem;
  }
  .nav-images{
    width:87%;
    margin-top:-1rem;
  }
  .nav-image-cart{
    width:80%;
    margin-top:3rem;
  }

  @media (max-width:578px) {
    .nav-images{
      width:60%;
      margin-top:-1rem;
      margin-left:0.5rem;
    }
    .nav-image-cart{
      width:60%;
      margin-top:3rem;
      margin-left:0.5rem;
    }
  }

`;

const Nav = () => {
  return (
    <StyledNav>
      <Link to=""> <img src={logo} alt="icon" className="nav-images" /> </Link>
      <Link to="/"> <img src={house} alt="icon" className="nav-image-cart" /> </Link>
      <Link to="/dashboard"> <img src={menu} alt="icon" className="nav-image-cart" /> </Link>
      <Link to="/cart"> <img src={cart} alt="icon" className="nav-image-cart" /> </Link>
      <Link to=""> <img src={location} alt="icon" className="nav-image-cart" /> </Link>
      <Link to=""> <img src={exit} alt="icon" className="nav-image-cart" /> </Link>
    </StyledNav>
  );
};

export default Nav;
