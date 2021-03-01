import React from 'react';
import styled from 'styled-components';
import NoImage from '../../../assets/icons/NoImage.svg';

const Photo = ({ imageUrl }) => {
  return (
    <>
      <StyledPhotoInput
        type="file"
        id="ImageUpload"
        name="ImageUpload"
        disabled
      />
      <label htmlFor="ImageUpload">
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
      </label>
    </>
  );
};

const StyledPhotoInput = styled.input`
  border-style: none;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
  outline: none;
  cursor: default;

  :focus {
    outline: none;
  }

  & + label {
    outline: none;
  }
`;

const StyledPhoto = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25.2vw;
  height: 14.2vw;
  border: 1px solid #000000;

  .iconImg {
    width: 82px;
    margin: 0 auto;
    margin-top: 2px;
  }

  .existImage {
    border-style: 'none';
    display: block;
    opacity: 1;
    width: 25.2vw;
    height: 14.2vw;
    background-color: black;
    object-fit: contain;
  }

  .noImage {
    width: 44px;
    height: 44px;
  }
`;

export default Photo;
