import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Clip from '../../../assets/icons/Clip.svg';

const FileUpload = props => {
  const { onChange, previewFile } = props;
  const userFile = useSelector(state => state.detail.detailFilename);

  return (
    <div style={{ display: 'flex' }}>
      <StyledFileInput
        type="file"
        id="FileUpload"
        name="FileUpload"
        onChange={onChange}
      />
      <StyledFilePreview>
        <label htmlFor="FileUpload">
          {previewFile === null ? (
            <div>
              {userFile}
              <img src={Clip} alt="" />
            </div>
          ) : (
            <div>
              {previewFile}
              <img src={Clip} alt="" />
            </div>
          )}
        </label>
      </StyledFilePreview>
    </div>
  );
};

const StyledFileInput = styled.input`
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
    width: 20.8vw;
    outline: none;
  }
`;

const StyledFilePreview = styled.div`
  width: 18.8vw;
  margin-top: 0.4vw;
  position: relative;

  img {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    cursor: pointer;
  }
`;

export default FileUpload;
