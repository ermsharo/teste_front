import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import CarouselCard from "../carouselCard";
const Cards = styled.div`
  display: flex;
  gap: 1rem;

`;

const CarouselDisplay = styled.div`
  width: 75%;
  margin: auto;
  padding-bottom: 8rem;
`;

const Card = styled.div`
  border: 3px solid #232323;
  border-radius: 1rem;
  width: 100%;
  padding: 4rem 2rem;
`;

const ExibitionTitle = styled.h2`
  font-family: "Cardo", serif;
  font-size: 5.25rem;
  font-weight: 700;
  line-height: 5.5rem;
  margin-bottom: 0;
  text-align: center;
  width: 60%;
  padding: 8rem 0;
  margin: auto;
`;

const CarouselArrowButton = styled.div`
  border: 3px solid #232323;
  border-radius: 1rem;
  height: 4rem;
  width: 5rem;
  position: relative;
  text-align: center;
  float: right;
  font-size: 2.5rem;
  line-height: 4.5rem;
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 3;
`;

const CarouselBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const goToNextCarousel = (currentIndex: number) => {
    setCurrentIndex(currentIndex + 1);
  };

  const goToPreviousCarousel = (currentIndex: number) => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  return (
    <CarouselDisplay>
      <ExibitionTitle>Here's what they have to say...</ExibitionTitle>
      <Carousel
        interval={5000}
        showIndicators={false}
        showThumbs={false}
        selectedItem={currentIndex}
        onChange={handleChangeIndex}
        showStatus={false}
        dynamicHeight={false}
      >
        <div>
          <Cards>
            <Card><CarouselCard/></Card>  <Card><CarouselCard/></Card> <Card><CarouselCard/></Card>
          </Cards>
        </div>
        <div>
          <Cards>
          <Card><CarouselCard/></Card>  <Card><CarouselCard/></Card> <Card><CarouselCard/></Card>
          </Cards>
        </div>
        <div>
          <Cards>
          <Card><CarouselCard/></Card>  <Card><CarouselCard/></Card> <Card><CarouselCard/></Card>
          </Cards>
        </div>
      </Carousel>
      <ButtonsBox>
        {" "}
        <CarouselArrowButton>
          <AiOutlineArrowLeft
            onClick={() => {
              goToPreviousCarousel(currentIndex);
            }}
          />
        </CarouselArrowButton>
        <CarouselArrowButton>
          <AiOutlineArrowRight
            onClick={() => {
              goToNextCarousel(currentIndex);
            }}
          />
        </CarouselArrowButton>
      </ButtonsBox>
    </CarouselDisplay>
  );
};

export default CarouselBox;
