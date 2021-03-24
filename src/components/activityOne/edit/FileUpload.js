import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Clip from '../../../assets/icons/Clip.svg';

const FileUpload = props => {
  const { onChange, previewFile } = props;
  const userFile = useSelector(state => state.detail.detailFilename);

  const previewFileArr = previewFile.split('.');
  const previewFileExtension = previewFileArr[1];

  const fileArr = userFile.split('.');
  const fileExtension = fileArr[1];

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
              {fileArr[0].length > 12
                ? `${fileArr[0].substring(0, 12)}...${fileExtension}`
                : userFile}
              <img src={Clip} alt="" />
            </div>
          ) : (
            <div>
              {previewFileArr[0].length > 12
                ? `${previewFileArr[0].substring(
                    0,
                    12,
                  )}...${previewFileExtension}`
                : previewFile}
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
  width: 0px;
  height: 0px;
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

const StyledFilePreview = styled.div``;

export default FileUpload;
