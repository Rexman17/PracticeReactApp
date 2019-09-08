import React from 'react';
import styled from 'styled-components';
import Bullets from './Bullets';

const HowItWorksBox = () => {

  const HowItWorksDiv = styled.div`
    background: white;
    border-radius: 5px;
    margin-top: 3em;
    padding: 1em;
  `

  const Title = styled.span`
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 1px;
  `


  return (
    <HowItWorksDiv>
      <Title>
        HOW IT WORKS
      </Title>
      <Bullets />
    </HowItWorksDiv>
  )
}

export default HowItWorksBox;
