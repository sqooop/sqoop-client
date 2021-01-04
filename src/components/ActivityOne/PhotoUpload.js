import React, { useState } from 'react';
import styled from 'styled-components';

const PhotoUpload = ({ userImage }) => {
  // 사진 미리보기로 보여주고 서버에 전송할 사진을 담는 state
  // 사용자가 수정 항목에서 선택한 사진이므로 초깃값은 null
  const [previewImage, setPreviewImage] = useState(null);

  // 사용자 파일 입력 함수
  const handleFileOnChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    // 사용자가 파일 입력 창에서 취소를 누르지 않고 파일을 입력했을 때
    // 사용자가 입력한 파일을 다 읽으면 파일의 데이터 URL을 가져옴
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(() => previewImage);
    }

    // reader.onloadend는 사용자가 입력한 파일을 읽는 동작이 끝났을 때 이벤트 핸들러
    reader.onloadend = () => {
      // reader.result는 파일의 컨텐츠로 Read only 상태
      setPreviewImage(() => reader.result);
    };
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
        accept="image/*"
        onChange={handleFileOnChange}
      />
      <StyledPhotoPreview>
        <label for="ImageUpload">
          {previewImage === null ? (
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
    width: 35.8rem;
    height: 20.2rem;
  }

  img.portrait {
    width: 100%;
    height: auto;
  }

  img.landscape {
    width: auto;
    height: 100%;
  }
`;

export default PhotoUpload;
