import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Clip from '../../../assets/icons/Clip.svg';
import Delete from '../../../assets/icons/DeleteFile.svg';

const FileUpload = props => {
  const { onChange, previewFile, onClick } = props;

  const userFile = useSelector(state => state.detail.detailFilename);

  const previewFileArr = previewFile.split('.');
  const previewFileExtension = previewFileArr[1];

  const fileArr = userFile.split('.');
  const fileExtension = fileArr[1];

  const [hoverItem, setHoverItem] = useState(true);

  const hoverBackground = event => {
    setHoverItem(false);
  };

  const unhoverBackground = event => {
    setHoverItem(true);
  };

  // console.log(previewFile);
  // console.log(userFile);

  return (
    <div style={{ display: 'flex' }}>
      <StyledFileInput
        type="file"
        id="FileUpload"
        name="FileUpload"
        onChange={onChange}
      />
      {hoverItem === true ? (
        <StyledFilePreview>
          <label htmlFor="FileUpload">
            {/* previewFile === null && userFile === null */}
            {previewFile === '' ? (
              <div>
                {fileArr[0].length > 12
                  ? `${fileArr[0].substring(0, 12)}...${fileExtension}`
                  : userFile}
                <img
                  src={Clip}
                  alt=""
                  onMouseEnter={hoverBackground}
                  onMouseLeave={unhoverBackground}
                />
              </div>
            ) : (
              <div>
                {previewFileArr[0].length > 12
                  ? `${previewFileArr[0].substring(
                      0,
                      12,
                    )}...${previewFileExtension}`
                  : previewFile}
                <img
                  src={Clip}
                  alt=""
                  onMouseEnter={hoverBackground}
                  onMouseLeave={unhoverBackground}
                />
              </div>
            )}
          </label>
        </StyledFilePreview>
      ) : (
        <StyledFilePreview>
          <label htmlFor="FileUpload">
            {userFile === '' && previewFile === '' ? (
              <div>
                {fileArr[0].length > 12
                  ? `${fileArr[0].substring(0, 12)}...${fileExtension}`
                  : userFile}
                <img
                  src={Clip}
                  alt=""
                  onMouseEnter={hoverBackground}
                  onMouseLeave={unhoverBackground}
                />
              </div>
            ) : previewFile === '' ? (
              <div>
                {fileArr[0].length > 12
                  ? `${fileArr[0].substring(0, 12)}...${fileExtension}`
                  : userFile}
                <img
                  src={Delete}
                  alt=""
                  onClick={onClick}
                  style={{ zIndex: '10' }}
                  onMouseEnter={hoverBackground}
                  onMouseLeave={unhoverBackground}
                />
              </div>
            ) : (
              <div>
                {previewFileArr[0].length > 12
                  ? `${previewFileArr[0].substring(
                      0,
                      12,
                    )}...${previewFileExtension}`
                  : previewFile}
                <img
                  src={Delete}
                  alt=""
                  onClick={onClick}
                  style={{ zIndex: '10' }}
                  onMouseEnter={hoverBackground}
                  onMouseLeave={unhoverBackground}
                />
              </div>
            )}
          </label>
        </StyledFilePreview>
      )}
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
