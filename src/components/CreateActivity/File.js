import React from 'react';
import styled from 'styled-components';
import Clip from '../../assets/icons/Clip.svg';

const FileUpload = props => {
  const { onChange, previewFile } = props;

  return (
    <>
      <StyledFileInput
        type="file"
        id="FileUpload"
        name="FileUpload"
        onChange={onChange}
      />
      <StyledFilePreview>
        <label htmlFor="FileUpload">
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

const StyledFilePreview = styled.div`
  height: 3rem;
  width: 27.906vw;
  float: left;
  padding-top: 0.4rem;
  padding-left: 0.8rem;
  position: relative;
  &:hover {
    background-color: #eeeeee;
  }
  img {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    cursor: pointer;
  }
`;

export default FileUpload;
