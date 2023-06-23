import { useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import Banner from "./components/banner"
import InfoSection from "./components/info-section";



const GlobalStyles = styled.div`
font-family: 'Lato', sans-serif;
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalStyles>
   
        <Header />
        <Banner/>
        <InfoSection/>
   
    </GlobalStyles>
  );
}

export default App;
