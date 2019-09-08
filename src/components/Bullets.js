import React, { Fragment } from 'react';
import styled from 'styled-components';

const Bullets = (props) => {

  const ListItem = styled.li`
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    margin: 15px;
    color: grey;
    max-width: fit-content;
  `


  return (
    <div style={{paddingTop: "1em"}}>
    {
      props.which === "top" ?
      <Fragment>
        <ListItem>You'll get a Harry's product worth at least $5</ListItem>
        <ListItem>It could be an item that we don't sell to the public</ListItem>
        <ListItem>Find out when you open your box</ListItem>
      </Fragment>
        :
      <Fragment>
        <ListItem>Nice try! But the mystery won’t be revealed until you open your box</ListItem>
      </Fragment>
    }

    </div>
  )
}

export default Bullets;
