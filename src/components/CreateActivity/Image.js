import React, { useState } from 'react';
import styled from 'styled-components';
import PostImageIcon from '../../assets/icons/PostImageIcon.svg';

const PhotoUpload = props => {
  const { onChange, image } = props;
  return (
    <>
      <StyledPhotoInput
        type="file"
        id="ImageUpload"
        name="ImageUpload"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        onChange={onChange}
      />
      <StyledPhotoPreview>
        <label for="ImageUpload">
          {!image ? (
            <StyledNoPhoto>
              <img src={PostImageIcon} alt="userImage"></img>
            </StyledNoPhoto>
          ) : (
            <img src={image} alt="previewImage"></img>
          )}
        </label>
      </StyledPhotoPreview>
    </>
  );
};

const StyledPhotoInput = styled.input`
  border-style: none;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -1;

  &:focus {
    outline: none;
    cursor: pointer;
  }

  & + label {
    outline: none;
  }
`;

const StyledPhotoPreview = styled.div`
  &:hover {
    background-color: #eeeeee, 90%;
  }
  img {
    border-style: 'none';
    width: 450px;
    height: 253px;
  }
`;

const StyledNoPhoto = styled.div`
  border: 1px solid #000000;
  width: 450px;
  height: 253px;
  img {
    border-style: 'none';
    width: 81px;
    height: 100px;
    margin: 17% 40%;
  }
`;

export default PhotoUpload;
