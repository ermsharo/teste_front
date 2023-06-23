import { useState } from "react";
import styled from "styled-components";

const LayoutBox = styled.div`
  border: 2px solid blue;
  background-color: #c4c4c4;

`;

const FooterInfo = styled.div`
  border: 2px solid blue;


`;


const LogoArea = styled.div`
  border: 2px solid blue;

`;

const LinksArea = styled.div`
  border: 2px solid blue;

`;

const AboutArea = styled.div`
  border: 2px solid blue;

`;








function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LayoutBox>
<FooterInfo>
<LogoArea>

    My Log Travels
</LogoArea>

</FooterInfo>
      </LayoutBox>
    </>
  );
}

export default App;
