import React from 'react';
import styled from 'styled-components';
import Bullets from './Bullets';

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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class HowItWorksBox extends React.Component {

  state = {
    topClicked: false,
    top: "top"
  }

  handleClick = e => {
    this.setState({ topClicked: !this.state.topClicked })
  }

  render() {

    return (
      <HowItWorksDiv>
        <FlexContainer>
          <Title>
            HOW IT WORKS
          </Title>
          <div onClick={this.handleClick}
            className={this.state.topClicked ? "fa fa-angle-up" : "fa fa-angle-down"}
            style={{paddingLeft: "10em", fontSize: "36px"}}>
          </div>
        </FlexContainer>
          { this.state.topClicked ? <Bullets which={this.state.top}/> : null }
      </HowItWorksDiv>
    )
  }

}

export default HowItWorksBox;
