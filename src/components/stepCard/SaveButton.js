import React from 'react';
import Styled from 'styled-components';
import SaveIconOff from '../../assets/icons/SaveIconOff.svg';
import SaveIconOn from '../../assets/icons/SaveIconOn.svg';

const SaveButtonWrap = Styled.div`
  button {
    box-sizing: border-box;
    height: 40px;
    width: 144px;
    margin-right: 12px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    float: right;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:focus {
      outline: none;
    }
  }

  img {
    width: 24px;
    height: 24px;
    margin-left: 14px;
    margin-right: 4px;
  }
`;

const SaveButton = ({
  backgroundColor,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
  border,
  text,
  width,
}) => {
  return (
    <SaveButtonWrap>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          border: border,
          width: width,
        }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {onClick ? (
          <img src={SaveIconOn} alt="" />
        ) : (
          <img src={SaveIconOff} alt="" />
        )}
        {text}
      </button>
    </SaveButtonWrap>
  );
};

export default SaveButton;
