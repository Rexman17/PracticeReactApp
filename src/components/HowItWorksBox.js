import React from 'react';
import styled from 'styled-components';
import Bullets from './Bullets';

class HowItWorksBox extends React.Component {


  render() {

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

      const DownBtn = ({ className, children }) => (
      <div className={"fa fa-angle-down"} style={{paddingLeft: "10em", fontSize: "36px"}}>
      </div>
      )

      const FlexContainer = styled.div`
        display: flex;
        flex-direction: row;
      `

    return (
      <HowItWorksDiv>
        <FlexContainer>
          <Title>
            HOW IT WORKS
          </Title>
          <DownBtn></DownBtn>
        </FlexContainer>
        <Bullets />
      </HowItWorksDiv>
    )
  }

}

export default HowItWorksBox;
