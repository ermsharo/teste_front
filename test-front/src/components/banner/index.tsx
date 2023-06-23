import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 20px;
`;

const FilledButton = styled.button`
  background-color: #232323;
  color: #f2f2f2;
  font-size: 1.3rem;
  padding: 0.75rem 3.2rem;
  border: 2px solid black;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  font-weight: bolder;

  &:hover {
    background-color: #ff0000;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: 10px;
`;

const CardsDisplay = styled.div`
display: flex;
justify-content: space-between;
width: 65%;
margin: auto; 
gap: 3.75rem;

`;

const LayoutBox = styled.div`
 
  width: 65%;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 54%;
  gap: 4%;
`;
const SectionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8rem; 
`;

const BannerInfo = styled.div`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BannerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 100%;
    height: 80%;
  }
`;

const PrimaryTitle = styled.h1`
  font-family: "Cardo", serif;
  font-size: 5rem;
  font-weight: bolder;
  line-height: 5rem;
  margin-bottom: 0;
`;

const ExibitionCover = styled.div`
  img {
    /* scale: 100% 50%; */
    width: 100%; 
    height: 100%;
  }
`;

const ExibitionTitle = styled.h2`

font-family: "Cardo", serif;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2rem;
  margin-bottom: 0;

    &:before{
      background: black;
    
    content: "";
    height: 4px;
    position: absolute;
    width: 3.5rem;
    margin: -2rem 0 0;
  }

`;

const ExibitionTextContext = styled.div``;

const ExibitionCardBox = styled.div`
display: flex;
flex-direction: column;
gap: 2rem; 
`;

const ExibitionCard = () => {
  return(
  <ExibitionCardBox>
    <ExibitionCover>
    <img src = "https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Images.jpg"/>

    </ExibitionCover>
    <ExibitionTitle>Pariatur veniam aliquip nostrud</ExibitionTitle>
    <ExibitionTextContext>
      Pariatur veniam aliquip nostrud adipisicing est esse velit occaecat minim
      non commodo nisi. Id cupidatat consequat cillum culpa labore nostrud
      aliquip magna. Id proident nostrud sunt anim ad commodo et non sint anim
      dolor.
    </ExibitionTextContext>
  </ExibitionCardBox>);
};

const HorizontalHeader = () => {
  return (
    <SectionBox>
      {" "}
      <LayoutBox>
        <BannerInfo>
          <PrimaryTitle>Travel to your dream destination</PrimaryTitle>
          <div>
            {" "}
            Pariatur veniam aliquip nostrud adipisicing est esse velit occaecat
            minim non commodo nisi. Id cupidatat consequat cillum culpa labore
            nostrud aliquip magna. Id proident nostrud sunt anim ad commodo et
            non sint anim dolor.
          </div>

          <div>
            <FilledButton>Reserve Ticket</FilledButton>
          </div>
        </BannerInfo>
        <BannerImage>
          <img src="https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_4x3.jpg"></img>
        </BannerImage>
      </LayoutBox>
    
<CardsDisplay><ExibitionCard/><ExibitionCard/><ExibitionCard/></CardsDisplay>



    </SectionBox>
  );
};

export default HorizontalHeader;
