import styled from "styled-components";


const LightButton = styled.button`

  background-color: #e9e7e7
;
  color: #232323;
  border: 3px solid #232323;
  font-size: 1.3rem;
  padding: 0.75rem 3.2rem;
  
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  font-weight: bolder;
  margin: 0;


  &:hover {
    background-color: #232323;
    cursor: pointer;
    color: #c4c4c4;
    border-color: #232323;

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
  width: 65%;
  margin: auto;
  display: flex; 
  justify-content: space-between;
`;
const SectionBox = styled.div`
  width: 100%;
  padding-top: 1rem;

`;



const HorizontalHeader = () => {
  return (
    <SectionBox>
      {" "}
      <LayoutBox>
        <Menu>
          <MenuItem><strong>Home</strong></MenuItem>
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
