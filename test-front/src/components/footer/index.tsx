import { useState } from 'react'
import styled from 'styled-components'

const LayoutBox = styled.div`
border: 2px solid blue; 
width: 75%;
`

const Header = styled.div`
border: 2px solid blue; 
width: 75%;

ul{ 
  display:flex; 
  justify-content: space;
}
`


const StartBanner = styled.div`
border: 2px solid blue; 
width: 75%;

h1{

}
`

const Button = styled.div`
border: 2px solid blue; 
width: 75%;

h1{
  
}
`

const LightButton = styled.button`
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
  const [count, setCount] = useState(0)

  return (
    <>
      <LayoutBox>
  <Header>
<ul><li>Home</li>
<li>Guide</li>
<li>Flights</li>
<li>About</li>
</ul>

<LightButton>Contact Us</LightButton>
  </Header>
      </LayoutBox>
    </>
  )
}

export default App
