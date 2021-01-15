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
  width: 28vw;
  height: 15.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  margin-top: 2.5vw;
  .existImage {
    width: 28vw;
    height: 15.8vw;
  }
`;

export default Photo;
