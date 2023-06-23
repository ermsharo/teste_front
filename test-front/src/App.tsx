import { Key, useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import Banner from "./components/banner";
import InfoSection from "./components/info-section";
import Carousel from "./components/carousel";
import CarouselCard from "./components/carouselCard";
import Footer from "./components/footer";

const GlobalStyles = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
`;

const FilledButton = styled.button`
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

const DarkerButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff0000;
  }
`;

const CustomComponent = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

function App() {
  const [count, setCount] = useState(0);

  const items = [{ text: "Item 1" }, { text: "Item 2" }, { text: "Item 3" }];

  const renderItem = (
    item: { text: string },
    index: Key | null | undefined
  ) => <CustomComponent key={index} text={item.text} />;

  return (
    <GlobalStyles>
      <Header />
      <Banner />
      <InfoSection />
      <Carousel items={items} renderItem={renderItem} />
      <Footer />
    </GlobalStyles>
  );
}

export default App;
