import React from 'react';
import styled from 'styled-components';
import NoImage from '../../../assets/icons/NoImage.svg';

const Photo = ({ imageUrl }) => {
  return (
    <>
      {imageUrl === '' ? (
        <StyledPhoto>
          {imageUrl}
          <img className="noImage" src={NoImage} alt="noImage"></img>
        </StyledPhoto>
      ) : (
        <StyledPhoto>
          <img className="existImage" src={imageUrl} alt="imageUrl"></img>
        </StyledPhoto>
      )}
    </>
  );
};

const StyledPhoto = styled.div`
  width: 25.2vw;
  height: 14.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  margin-top: 2.5vw;
  z-index: 99;

  .existImage {
    background-color: black;
    object-fit: contain;
    width: 25.2vw;
    height: 14.2vw;
    z-index: -1;
  }
`;

export default Photo;
