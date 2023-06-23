import { useState } from 'react'
import styled from 'styled-components'

const CarouselGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`




const CardExample = styled.div`

border: 2px solid red; 
`










function CarouselCard() {
  const [count, setCount] = useState(0)

  return (
    <CarouselGrid>
<CardExample>asdasd</CardExample>
<CardExample>asdasd</CardExample>
<CardExample>asdasdasd</CardExample>
    </CarouselGrid>
  )
}

export default CarouselCard
