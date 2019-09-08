import React from 'react';
import styled from 'styled-components';

const Bullets = () => {

  const ListItem = styled.li`
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    margin: 15px;
    color: grey;
  `


  return (
    <div style={{paddingTop: "1em"}}>
      <ListItem>You'll get a Harry's product worth at least $5</ListItem>
      <ListItem>It could be an item that we don't sell to the public</ListItem>
      <ListItem>Find out when you open your box</ListItem>
    </div>
  )
}

export default Bullets;
