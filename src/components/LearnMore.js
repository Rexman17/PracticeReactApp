import React from 'react';
import styled from 'styled-components';
import Bullets from './Bullets';

const LearnMoreDiv = styled.div`
  background: white;
  border-radius: 5px;
  margin-top: 0.1em;
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

class LearnMore extends React.Component {

  state = {
    bottomClicked: false,
    bottom: "bottom"
  }

  handleClick = e => {
    this.setState({ bottomClicked: !this.state.bottomClicked })
  }

  render() {

    return (
      <LearnMoreDiv>
        <FlexContainer>
          <Title>
            LEARN MORE
          </Title>
          <div onClick={this.handleClick}
            className={"fa fa-angle-down"}
            style={{paddingLeft: "10.5em", fontSize: "36px"}}>
          </div>
        </FlexContainer>
          { this.state.bottomClicked ? <Bullets which={this.state.bottom}/> : null }
      </LearnMoreDiv>
    )
  }

}

export default LearnMore;
