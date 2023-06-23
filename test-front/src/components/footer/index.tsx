import { useState } from "react";
import styled from "styled-components";

const LayoutBox = styled.div`
  background-color: #c4c4c4;
  padding: 3rem;
`;

const FooterInfo = styled.div`
  width: 75%;
  margin: auto;
  display: grid;
  grid-template-columns: 27% 73%;
  padding: 4.25rem;
  padding-bottom: 7rem;
  border-bottom: 1rem;
`;

const LogoArea = styled.div`

  font-family: "Cardo", serif;
  font-size: 4rem;
  font-weight: bolder;
  line-height: 4rem;
  margin-bottom: 0;
`;

const LinksArea = styled.div`
padding: 0rem;


`;

const LinksBox = styled.div`

 
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const LinksList = styled.ul`
  

  display: flex;
  flex-direction: column;
  gap:2rem;
  font-size: 1.3rem;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;


  li{
    all: unset;
    margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  }

  a{
    color: #232323;
  }
`;

const LinksTitle = styled.div`
 
  font-size: 1.5rem;
`;

const AboutArea = styled.div`

  font-size: 1.2rem;
  text-align: center;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LayoutBox>
        <FooterInfo>
          <LogoArea>My Log Travels</LogoArea>
          <LinksArea>
            <LinksArea>
              <LinksTitle>Quick Links</LinksTitle>
              <LinksBox>
                <LinksList>
                  <li>
                    <a href = "#">Home</a>
                  </li>
                  <li>
                    <a href = "#">About Us</a>
                  </li>
                  <li>
                    <a href = "#">My Travel Logs</a>
                  </li>{" "}
                </LinksList>
                <LinksList>
                  <li>
                    <a href = "#">Travels</a>
                  </li>
                  <li>
                    <a href = "#">Promo Hights</a>
                  </li>
                  <li>
                    <a href = "#">Travel Routes</a>
                  </li>{" "}
                </LinksList>
                <LinksList>
                  <li>
                    <a href = "#">Recommendations</a>
                  </li>
                  <li>
                    <a href = "#">Guides</a>
                  </li>
                  <li>
                    <a href = "#">Blogs</a>
                  </li>{" "}
                </LinksList>
                <LinksList>
                  <li>
                    <a href = "#">Mission Statement</a>
                  </li>
                  <li>
                    <a href = "#">The Team</a>
                  </li>
                  <li>
                    <a href = "#">Contact Us</a>
                  </li>{" "}
                </LinksList>
              </LinksBox>
            </LinksArea>
          </LinksArea>
        </FooterInfo>
        <AboutArea>2021 - 2022 My Log Travels.All Rights Reserved.</AboutArea>
      </LayoutBox>
    </>
  );
}

export default App;
