import React, { useState } from 'react';
import styled from 'styled-components';
import NoImage from '../../../assets/icons/NoImage.svg';
import { ReactComponent as ImageIcon } from '../../../assets/icons/PostImageIcon.svg';

const PhotoUpload = props => {
  const { onChange, image, user } = props;

  return (
    <>
      <StyledPhotoInput
        type="file"
        id="ImageUpload"
        name="ImageUpload"
        accept="image/*"
        onChange={onChange}
      />
      <label htmlFor="ImageUpload">
        {image === '' && user === '' ? (
          <StyledPhotoPreview>
            {user}
            <img className="noImage" src={NoImage} alt="noImage"></img>
            <div className="hoverImg"></div>
          </StyledPhotoPreview>
        ) : image === '' && user !== '' ? (
          <StyledPhotoPreview>
            <img className="existImage" src={user} alt="previewImg"></img>
            <div className="hoverImg">
              <ImageIcon className="iconImg" />
            </div>
          </StyledPhotoPreview>
        ) : (
          <StyledPhotoPreview>
            <img className="existImage" src={image} alt="previewImg"></img>
            <div className="hoverImg">
              <ImageIcon className="iconImg" />
            </div>
          </StyledPhotoPreview>
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

  :focus {
    outline: none;
    cursor: pointer;
  }

  & + label {
    outline: none;
  }
`;

const StyledPhotoPreview = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25.2vw;
  height: 14.2vw;
  border: 1px solid #000000;
  cursor: pointer;

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

  .hoverImg {
    position: absolute;
    top: 60px;
    opacity: 0;
    background-color: #eeeeee 90%;
  }

  :hover img {
    opacity: 0.3;
  }

  :hover .hoverImg {
    height: 20px;
    opacity: 1;
  }
  .noImage {
    width: 44px;
    height: 44px;
  }
`;

export default PhotoUpload;
