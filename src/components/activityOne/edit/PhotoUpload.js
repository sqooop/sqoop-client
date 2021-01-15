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
        ) : image === '' && user != '' ? (
          <StyledPhotoPreview>
            <img src={user} alt="previewImg"></img>
            <div className="hoverImg">
              <ImageIcon className="iconImg" />
            </div>
          </StyledPhotoPreview>
        ) : (
          <StyledPhotoPreview>
            <img src={image} alt="previewImg"></img>
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

  .iconImg {
    width: 6.3vw;
    height: 7.8vw;
  }

  img {
    border-style: 'none';
    display: block;
    opacity: 1;
    width: 25.2vw;
    height: 14.2vw;
    object-fit: cover;
  }

  .hoverImg {
    position: absolute;
    opacity: 0;
    top: 4vw;
    left: 10.9vw;
    background-color: #eeeeee 90%;
  }

  :hover img {
    opacity: 0.3;
  }

  :hover .hoverImg {
    opacity: 1;
  }
`;

export default PhotoUpload;
