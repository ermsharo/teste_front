import { useState } from "react";
import styled from "styled-components";

const CarouselCardBox = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
gap:1rem;
`;

const CardBox = styled.div`
  border: 2px solid red;
`;

const CardImage = styled.div`
display: flex;
justify-content: center;
margin: auto;

width: 9rem;
  img {
    aspect-ratio: 1/1;
    border-radius: 50%;

  }
  
  
`;

const CardTitle = styled.h3`
font-size: 1.5rem;
`;



function CarouselCard() {
  return (
    <CarouselCardBox>
      <CardImage>
        <img src="https://images2.fanpop.com/image/photos/13000000/Dachshund-dogs-13073651-1600-1200.jpg" />
      </CardImage>
      <CardTitle>Customer Name</CardTitle>

      <div>Magna ut voluptate occaecat culpa id ea consequat mollit minim consequat ad cupidatat id. Commodo incididunt cupidatat voluptate dolore. Non in qui commodo ad occaecat veniam officia labore aliquip. </div>
    </CarouselCardBox>
  );
}

export default CarouselCard;
