import React from 'react';
import styled from 'styled-components';
import HowItWorksBox from './HowItWorksBox'
import LearnMore from './LearnMore'


const InfoContainer = () => {

  const InfoDiv = styled.div`
    margin-left: 5%;

  `

  const Title = styled.h1`
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 5px;
  `

  const BlueText = styled.h2`
    font-family: brandon-grotesque, sans-serif;
    color: #439CF6;
  `

  const AddToCart = styled.button`
    background: #E54444;
    border-radius: 6px;
    margin-top: 3em;
    padding: 1em;
    width: 100%;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 25px;
  `

  return (
    <InfoDiv>
      <Title>Mystery Item    |    $5</Title>
      <BlueText>We won't ruin a good surprise.</BlueText>
      <div id="flex">
        <HowItWorksBox />
        <LearnMore />
      </div>
      <AddToCart>Add To Cart</AddToCart>
    </InfoDiv>
  )
}


export default InfoContainer;
