import React from 'react';
import Styled from 'styled-components';
import SaveIconOff from '../../assets/icons/SaveIconOff.svg';
import SaveIconOn from '../../assets/icons/SaveIconOn.svg';

const SaveButtonWrap = Styled.div`
  button {
    box-sizing: border-box;
    height: 5.5vh;
    width: 20vh;
    margin-right: 1.6vh;
    font-weight: bold;
    font-size: 2.2vh;
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
    width: 3.3vh;
    height: 3.3vh;
    margin-left: 1.9vh;
    margin-right: 0.5vh;
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
