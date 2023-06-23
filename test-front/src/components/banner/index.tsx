import styled from "styled-components";


const FilledButton = styled.button`
  background-color: #232323;
  color: #f2f2f2;
  font-size: 1.3rem;
  padding: 0.75rem 3.2rem;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  font-weight: bolder;
  margin: 0;

  &:hover {
    background-color: #c4c4c4;
    cursor: pointer;
    color: #232323;
    border-color: #c4c4c4;
  }
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
  padding: 0rem 0 7.5rem 0;
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

  &:before {
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

const ExibitionCard = ({ image }: { image: any }) => {
  return (
    <ExibitionCardBox>
      <ExibitionCover>
        <img src={image} />
      </ExibitionCover>
      <ExibitionTitle>Pariatur veniam aliquip nostrud</ExibitionTitle>
      <ExibitionTextContext>
        Pariatur veniam aliquip nostrud adipisicing est esse velit occaecat
        minim non commodo nisi. Id cupidatat consequat cillum culpa labore
        nostrud aliquip magna. Id proident nostrud sunt anim ad commodo et non
        sint anim dolor.
      </ExibitionTextContext>
    </ExibitionCardBox>
  );
};

const cardsImages = [
  "https://github.com/ermsharo/teste_front/blob/main/test-front/src/assets/Screenshot%20from%202023-06-23%2015-54-52.png?raw=true",
  "https://github.com/ermsharo/teste_front/blob/main/test-front/src/assets/Screenshot%20from%202023-06-23%2015-55-04.png?raw=true",
  "https://github.com/ermsharo/teste_front/blob/main/test-front/src/assets/Screenshot%20from%202023-06-23%2015-55-13.png?raw=true",
];

const HorizontalHeader = () => {
  return (
    <SectionBox>
      {" "}
      <LayoutBox>
        <BannerInfo>
          <PrimaryTitle>Travel to your dream destination</PrimaryTitle>
          <div>
            Welcome to our esteemed travel agency, where dreams come to life! We
            are thrilled to present an extraordinary opportunity for you to
            travel to your dream destination. Prepare to embark on a journey
            filled with awe-inspiring landscapes, vibrant cultures, and
            unforgettable experiences.
          </div>

          <div>
            <FilledButton>Reserve Ticket</FilledButton>
          </div>
        </BannerInfo>
        <BannerImage>
          <img src="https://raw.githubusercontent.com/ermsharo/teste_front/main/test-front/src/assets/Screenshot%20from%202023-06-23%2002-50-58.png"></img>
        </BannerImage>
      </LayoutBox>
      <CardsDisplay>
        {cardsImages.map((image, index) => (
            <div key = {index}>
          <ExibitionCard image={image} />
          </div>
        ))}
      </CardsDisplay>
    </SectionBox>
  );
};

export default HorizontalHeader;
