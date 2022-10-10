import React from "react";
import styled from "styled-components";
import "../Pages/Landing.css";
import { Link } from "react-router-dom";

const StlyedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
  text-align: center;

  .welcome {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 75px;
    color: #ffffff;
  }
  .welcome span {
    font-weight: 700;
  }

  .text1 {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 31px;
    text-align: center;
    color: #ffffff;
    padding: 0rem 15rem;
    margin-top: 49px;
  }

  .flex-btns {
    display: flex;
  }
  .btn1 {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 38px;
    color: #000000;
    background: #ffffff;
    border-radius: 2px;
    border: none;
    width: 100px;
    height: 50px;
    margin-right:1rem;
    margin-top: 3rem;
  }

  @media (max-width: 950px) {
    .text1 {
      padding: 0rem 5rem;
    }
  }

  @media (max-width: 626px) {
    .text1 {
      padding: 0rem 2rem;
    }
  }

  @media (max-width: 500px) {
    .text1 {
      padding: 0rem 0.5rem;
    }
  }
`;

const Landing = () => {
  return (
    <div className="background">
      <div className="image">
        <StlyedDiv>
          <p className="welcome">
            Welcome to <span>Sushi</span> Restaurant
          </p>
          <p className="text1">
            People eat with their eyes and Sushi creates an easy way for
            customers to order when they can see beautiful photos of your food
          </p>

          <div className="flex-btns">
            <Link to="/dashboard"> <button className="btn1">Menu</button> </Link>
            <Link to="/cart"> <button className="btn1">Cart</button> </Link>
          </div>
        </StlyedDiv>
      </div>
    </div>
  );
};

export default Landing;
