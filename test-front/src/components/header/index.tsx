import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f2f2f2;
  padding: 20px;
`;

const LightButton = styled.button`
  background-color: transparent;
  padding: 10px 20px;

  font-size: 16px;
  border: 2px solid black;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff0000;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  padding: 1rem;
  gap: 4.5rem;

  :hover{
    font-weight: bold;
  }
`;

const MenuItem = styled.li`
  
`;


const LayoutBox = styled.div`
  border: 2px solid blue;
  width: 65%;
  margin: auto;
  display: flex; 
  justify-content: space-between;
`;
const SectionBox = styled.div`
  width: 100%;
  border: 2px solid red;
`;

const HorizontalHeader = () => {
  return (
    <SectionBox>
      {" "}
      <LayoutBox>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Guides</MenuItem>
          <MenuItem>Flights</MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
        <LightButton>Contact US</LightButton>
      </LayoutBox>
    </SectionBox>
  );
};

export default HorizontalHeader;
