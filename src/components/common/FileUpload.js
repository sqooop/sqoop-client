import React, { useState } from 'react';
import styled from 'styled-components';

const FileUpload = ({ userFile }) => {
  // 파일 이름을 미리보기로 보여주기 위한 state
  const [previewFile, setPreviewFile] = useState(null);
  const [serverFile, setServerFile] = useState(null);

  // 사용자가 파일 입력 함수
  const handleFileOnChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      setPreviewFile(() => file.name);
    } else {
      setPreviewFile(() => previewFile);
    }

    reader.onloadend = () => {
      setServerFile(() => reader.result);
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
        file: serverFile,
      }),
    });
  };

  return (
    <>
      <StyledFileInput
        type="file"
        id="FileUpload"
        name="FileUpload"
        onChange={handleFileOnChange}
      />
      <StyledFilePreview>
        <label for="FileUpload">
          {previewFile === null ? (
            <div>{userFile}</div>
          ) : (
            <div>{previewFile}</div>
          )}
        </label>
      </StyledFilePreview>
    </>
  );
};

const StyledFileInput = styled.input`
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

const StyledFilePreview = styled.div`
  &:hover {
    background-color: #eeeeee, 90%;
  }
`;

export default FileUpload;
