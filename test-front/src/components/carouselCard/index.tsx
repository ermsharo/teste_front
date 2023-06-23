import styled from "styled-components";

const CarouselCardBox = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
gap:1rem;
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

type Person = {
  name: string;
  experience: string;
  image: string;
};

function CarouselCard({people} :{people : Person}) {
  console.log("people here ->", people)
  const {name, experience, image} = people; 
  return (
    <CarouselCardBox>
      <CardImage>
        <img src={image} />
      </CardImage>
      <CardTitle>{name}</CardTitle>

      <div>{experience} </div>
    </CarouselCardBox>
  );
}

export default CarouselCard;
