import React from 'react';
import styled from 'styled-components';

const PhotoUpload = ({ isReadOnly, onChangeFunc, profileImg, photoIcon }) => {
  return (
    <>
      {isReadOnly && (
        <StyledPhotoPreview>
          <div className="photo">
            {profileImg.file ? (
              profileImg.preview ? (
                <img
                  className="photo__uploaded"
                  src={profileImg.preview}
                  alt=""
                />
              ) : (
                <img className="photo__uploaded" src={profileImg.file} alt="" />
              )
            ) : (
              <img className="photo__empty" src={photoIcon} alt="" />
            )}
          </div>
        </StyledPhotoPreview>
      )}
      {!isReadOnly && (
        <StyledPhotoInput
          type="file"
          id="ImageUpload"
          name="ImageUpload"
          accept="image/*"
          onChange={onChangeFunc}
        />
      )}
      {!isReadOnly && (
        <label htmlFor="ImageUpload">
          <StyledPhotoPreview>
            <div className="photo">
              {profileImg.file ? (
                profileImg.preview ? (
                  <img
                    className="photo__uploaded"
                    src={profileImg.preview}
                    alt=""
                  />
                ) : (
                  <img
                    className="photo__uploaded"
                    src={profileImg.file}
                    alt=""
                  />
                )
              ) : (
                <img className="photo__empty" src={photoIcon} alt="" />
              )}
              {profileImg.file ? (
                ''
              ) : (
                <div className="photo__upload">
                  <p>사진 첨부</p>
                </div>
              )}
            </div>
          </StyledPhotoPreview>
        </label>
      )}
    </>
  );
};

const StyledPhotoPreview = styled.div`
  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 151px;
    height: 192px;
    background-color: white;
    border: 1px solid black;
  }
  .photo__uploaded {
    width: 151px;
    height: 192px;
    &:hover {
      cursor: pointer;
    }
  }
  .photo__upload {
    position: absolute;
    z-index: 1;
    width: 151px;
    height: 192px;
    background-color: rgba(0, 0, 0, 0.07);
    font-size: 12px;
    & > p {
      margin-top: 145px;
      margin-left: 45px;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledPhotoInput = styled.input`
  border-style: none;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
  outline: none;
  position: absolute;

  :focus {
    outline: none;
    cursor: pointer;
  }

  & + label {
    outline: none;
  }
`;

export default PhotoUpload;
