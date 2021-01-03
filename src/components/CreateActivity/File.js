import React, { useState } from 'react';
import styled from 'styled-components';
import Clip from '../../assets/icons/Clip.svg';

import SaveIconBlue from '../../assets/icons/SaveIconBlue.svg';
const FileUpload = () => {
  // 파일 이름을 미리보기로 보여주기 위한 state
  const [previewFile, setPreviewFile] = useState(null);
  const [serverFile, setServerFile] = useState(null);

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
            <span style={{ color: '#A5A5A5' }}>
              활동 증빙 및 관련 자료 첨부 (doc, hwp, zip 등)
            </span>
          ) : (
            <span>{previewFile}</span>
          )}
          <img src={Clip} alt="" />
        </label>
      </StyledFilePreview>
    </>
  );
};

const StyledFileInput = styled.input`
  background-color: red;
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
  height: 30px;
  width: 360px;
  float: left;
  padding-top: 4px;
  padding-left: 8px;
  position: relative;
  &:hover {
    background-color: #eeeeee;
  }
  img {
    position: absolute;
    top: 6px;
    right: 4px;
  }
`;

export default FileUpload;
