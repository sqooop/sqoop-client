import React, { useState } from 'react';
import styled from 'styled-components';

const PhotoUpload = ({ userImage }) => {
  // 사진 미리보기로 보여주기 위한 state
  const [previewImage, setPreviewImage] = useState('');

  // 사용자가 파일 입력 함수
  const handleFileOnChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setPreviewImage(() => reader.result);
    };

    reader.readAsDataURL(file);
  };

  // 사용자가 수정한 값 서버로 전송하는 함수
  const dataSubmit = async () => {
    await fetch('서버 API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        img: previewImage,
      }),
    });
  };

  return (
    <>
      <StyledPhotoInput
        type="file"
        id="ImageUpload"
        name="ImageUpload"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        onChange={handleFileOnChange}
      />
      <StyledPhotoPreview>
        <label for="ImageUpload">
          {previewImage === '' ? (
            <img src={userImage} alt="userImage"></img>
          ) : (
            <img src={previewImage} alt="previewImage"></img>
          )}
        </label>
      </StyledPhotoPreview>
    </>
  );
};

const StyledPhotoInput = styled.input`
  margin-top: 2rem;
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
    width: 22.438rem;
    height: 12.375rem;
  }
`;

export default PhotoUpload;
