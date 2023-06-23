import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 20px;
`;

const LayoutBox = styled.div`
  width: 70%;

  margin: auto;
  display: grid;
  grid-template-columns: 44% 56%;
  gap: 4%;
`;
const SectionBox = styled.div`
  width: 100%;
  background-color: #232323;
  color: #e9e7e7;
  padding: 3rem 0 6.5rem 0;
`;

const BannerInfo = styled.div`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 3.8rem;

  img {
    width: 100%;
    scale: 1 1.125;
  }
`;

const ExibitionCover = styled.div`
  img {
    scale: 100% 50%;
  }
`;

const ExibitionInfo = styled.div`
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const ExibitionTitle = styled.h2`
  font-family: "Cardo", serif;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 3.6rem;
  margin-bottom: 0;
`;

const ExibitionCardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.7rem;
  margin-bottom: 0;
`;

const TextInfoTopics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  font-size: 1.1rem;
`;

const ExibitionTextContext = styled.div``;

const ExibitionCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TextInfo = () => {
  return (
    <>
      <ExibitionCardTitle>Laboris enim sunt</ExibitionCardTitle>
      <ExibitionTextContext>
        Consectetur magna minim esse ea culpa id commodo minim nulla adipisicing
        ipsum fugiat. Cupidatat fugiat adipisicing est sint. Eu ad laborum do eu
        nostrud. Laboris pariatur do anim nisi enim in sit ipsum pariatur
        aliquip dolore.
      </ExibitionTextContext>
    </>
  );
};

const InfoSection = () => {
  return (
    <SectionBox>
      <LayoutBox>
        <ExibitionInfo>
          <ExibitionTitle>Choose anywhere you'd like to be</ExibitionTitle>
          <TextInfoTopics>
            <div>
              <TextInfo />
            </div>
            <div>
              <TextInfo />
            </div>
          </TextInfoTopics>
        </ExibitionInfo>
        <InfoImage>
          <img src="https://www.scotsman.com/webimg/b25lY21zOmRmYmExYzE4LTZhY2ItNDBkZS1iMTU1LWY4YTVlZWNmYTdkYzowOTcxZDZlOC00MDc1LTQzYzItOWEyOC00YjNlNzFiY2Y1YzI=.jpg?width=1200&enable=upscale" />
        </InfoImage>
      </LayoutBox>
    </SectionBox>
  );
};

export default InfoSection;
