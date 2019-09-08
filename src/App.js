import React from 'react';
import MysteryImg from './components/MysteryImg'
import InfoContainer from './components/InfoContainer'
import styled from 'styled-components';

function App() {

  const Wrapper = styled.div`
    padding-top: 4em;
    background: #e5e5e5;
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
  `

  return (
    <Wrapper>
      <MysteryImg />
      <InfoContainer />
    </Wrapper>
  );
}

export default App;
