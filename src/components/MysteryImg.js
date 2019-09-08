import React from 'react';
import styled from 'styled-components';


const MysteryImg = () => {

  const MysteryImage = styled.img`
    width:30%;
    height: 80vh;
    margin-right: 55px;
  `

  return (
    <MysteryImage
      src="https://www.harrys.com/harrys-cdnx-prod/assets/images/gallery_images/attachments/20a67661ff73ed89424ba5251eb30c26feb79202.jpg"
      alt="mystery"
    />
  )
}

export default MysteryImg
