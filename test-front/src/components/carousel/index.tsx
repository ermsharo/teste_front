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
  width: calc(60% + 6rem);
  padding: 8rem 0;
  margin: auto;
`;

const CarouselArrowButton = styled.div`
  border: 3px solid #232323;
  border-radius: 1rem;
  height: 4rem;
  width: 5rem;
  text-align: center;
  float: right;
  font-size: 2.5rem;
  line-height: 4.5rem;
  display: inline-block;
  margin: 0 5px;
  z-index: 4;
  background-color:
#e9e7e7;
`;

const CarouselArrowPrevBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: -3rem;
`;

const CarouselArrowNextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -3rem;

`;

type Person = {
  name: string;
  experience: string;
  image: string;
};

type TravelAgencyData = {
  people: Person[];
};

type CarouselBoxProps = {
  CarouselData: TravelAgencyData;
};

const CarouselBox = ({ CarouselData }: CarouselBoxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const renderCustomArrowPrev = (
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>
  ) => (
    <CarouselArrowPrevBox>
      {" "}
      <CarouselArrowButton>
        <AiOutlineArrowLeft onClick={onClickHandler} />
      </CarouselArrowButton>
    </CarouselArrowPrevBox>
  );

  const renderCustomArrowNext = (
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>
  ) => (
    <CarouselArrowNextBox>
      {" "}
      <CarouselArrowButton>
        <AiOutlineArrowRight onClick={onClickHandler} />
      </CarouselArrowButton>
    </CarouselArrowNextBox>
  );

  console.log("Carousel data", CarouselData);

  const splitArray = (array: Person[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const splitSize = 3;

  const splitArrays = splitArray(CarouselData.people, splitSize);
  console.log(splitArrays);
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
        renderArrowPrev={renderCustomArrowPrev}
        renderArrowNext={renderCustomArrowNext}
      >
        {splitArrays.map((peoples, index) => (
          <div>
            <Cards key={index}>
              {peoples.map((people, indexChild) => (
                <Card key={`${index}-${indexChild}-${people}`}>
                  <CarouselCard people={people} />
                </Card>
              ))}
            </Cards>
          </div>
        ))}
      </Carousel>
    </CarouselDisplay>
  );
};

export default CarouselBox;
