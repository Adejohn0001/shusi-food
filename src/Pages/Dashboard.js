import React from "react";
import Item from "../../src/Components/Item";
import Data from "../Components/Data";
import Nav from "../Components/Nav";
import styled from "styled-components";

const StyledDashboard = styled.div`
display:flex;
height: 100vh;
padding: 0px 70px 0px 40px;
margin: 0 auto;
width:100%;


.nav-dash {
    flex:25%;
    width="20%"
}

.sushi-food {
    font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 63px;
color: #000000;
width:25%;
margin-top:1.5rem;
border-bottom: 3px solid #F1D5BB;
}

@media (max-width: 1030px) {
  .sushi-food {
font-size: 30px;
line-height: 63px;
color: #000000;
width:30%;
margin-left:6rem;
} 
}

@media (max-width: 796px) {
  .sushi-food {
font-size: 30px;
line-height: 63px;
color: #000000;
width:50%;
margin-left:6rem;
} 
}

@media (max-width: 514px) {
  .sushi-food {
font-size: 30px;
line-height: 63px;
color: #000000;
width:80%;
margin-left:6rem;
} 
}

@media (max-width: 370px) {
  display:flex;
height: 100vh;
padding: 0px 40px 0px 40px;
margin: 0 auto;
width:100%;

.sushi-food {
  font-size: 30px;
  line-height: 63px;
  color: #000000;
  width:80%;
  margin-left:4.5rem;
  } 
}

`;

const Dashboard = (props) => {
  return (
    <StyledDashboard>
      <div className="nav-dash">
        {" "}
        <Nav />{" "}
      </div>
      <div>
        <p className="sushi-food">SUSHI FOOD</p>
        <div className="food-menus">
          {Data.productData.map((item, id) => {
            return (
              <Item
                img={item.img}
                title={item.title}
                price={item.price}
                item={item}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
