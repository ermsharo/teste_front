import styled from "styled-components";
import Header from "./components/header";
import Banner from "./components/banner";
import InfoSection from "./components/info-section";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import { GetExperiences } from "./services/requests";

const GlobalStyles = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
`;

function App() {
  const { data, isLoading } = GetExperiences<any>({
    url: `https://raw.githubusercontent.com/ermsharo/mocked_data/main/data.json`,
  });

  if (isLoading) {
    return <>loading</>;
  }

  if (data) {
    return (
      <GlobalStyles>
        <Header />
        <Banner />
        <InfoSection />
        <Carousel CarouselData={data} />
        <Footer />
      </GlobalStyles>
    );
  }
}

export default App;
