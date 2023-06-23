import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface CarouselProps {
  images: string[];
}

const CarouselContainer = styled.div`
  position: relative;
  width: 75%; 
  margin: auto;

`;

const ImageContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  transition: transform 0.5s;
`;

const Image = styled.img<{ active: boolean }>`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  margin-right: 10px;
  border: ${(props) => (props.active ? '2px solid red' : 'none')};
`;

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToPreviousSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
    scrollToCurrentIndex();
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
    scrollToCurrentIndex();
  };

  const scrollToCurrentIndex = () => {
    if (containerRef.current) {
      const { offsetWidth } = containerRef.current;
      containerRef.current.scrollLeft = currentIndex * offsetWidth;
    }
  };

  return (
    <CarouselContainer>
      <button onClick={goToPreviousSlide}>Previous</button>
      <ImageContainer ref={containerRef}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="carousel-slide"
            active={index === currentIndex}
          />
        ))}
      </ImageContainer>
      <button onClick={goToNextSlide}>Next</button>
    </CarouselContainer>
  );
};

export default Carousel;
