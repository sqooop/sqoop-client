import React from 'react';
import Styled from 'styled-components';
import SaveIconOff from '../../assets/icons/SaveIconOff.svg';
import SaveIconOn from '../../assets/icons/SaveIconOn.svg';

const SaveButtonWrap = Styled.div`
  button {
    box-sizing: border-box;
    width: 144px;
    height: 40px;
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
}) => {
  return (
    <SaveButtonWrap>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          border: border,
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
        스쿱 저장
      </button>
    </SaveButtonWrap>
  );
};

export default SaveButton;
