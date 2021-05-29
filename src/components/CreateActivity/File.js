import React, { useState } from 'react';
import styled from 'styled-components';
import Clip from '../../assets/icons/Clip.svg';
import Delete from '../../assets/icons/DeleteFile.svg';

const FileUpload = props => {
  const { onChange, previewFile, onClick } = props;

  const previewFileArr = previewFile.split('.');
  const previewFileExtension = previewFileArr[1];

  const [hoverItem, setHoverItem] = useState(true);

  const hoverBackground = event => {
    setHoverItem(false);
  };

  const unhoverBackground = event => {
    setHoverItem(true);
  };

  return (
    <>
      <StyledFileInput
        type="file"
        id="FileUpload"
        name="FileUpload"
        onChange={onChange}
      />
      {hoverItem === false ? (
        <StyledFilePreview>
          <label htmlFor="FileUpload">
            {previewFile === '' ? (
              <div>
                <img
                  src={Clip}
                  alt=""
                  onMouseEnter={hoverBackground}
                  onMouseLeave={unhoverBackground}
                />
              </div>
            ) : (
              <div>
                {previewFileArr[0].length > 17
                  ? `${previewFileArr[0].substring(
                      0,
                      17,
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
      ) : (
        <StyledFilePreview>
          <label htmlFor="FileUpload">
            {previewFile === '' ? (
              <div>
                <img
                  src={Clip}
                  alt=""
                  onMouseEnter={hoverBackground}
                  onMouseLeave={unhoverBackground}
                />
              </div>
            ) : (
              <div>
                {previewFileArr[0].length > 17
                  ? `${previewFileArr[0].substring(
                      0,
                      17,
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
      )}
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
