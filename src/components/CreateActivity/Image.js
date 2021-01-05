import React from 'react';
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
        accept="image/*"
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
  border: 0.1rem solid #000000;
  width: 0.01rem;
  height: 0.01rem;
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
    width: 45rem;
    height: 25.3rem;
  }
`;

const StyledNoPhoto = styled.div`
  border: 0.1rem solid #000000;
  width: 45rem;
  height: 25.3rem;
  cursor: pointer;
  img {
    border-style: 'none';
    width: 8.1rem;
    height: 10rem;
    margin: 17% 40%;
  }
`;

export default PhotoUpload;
