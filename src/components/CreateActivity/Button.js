import React from 'react';
import Styled from 'styled-components';
import SaveIcon from '../../assets/icons/SaveIcon.svg';
import SaveIconBlue from '../../assets/icons/SaveIconBlue.svg';

const SaveButtonWrap = Styled.div`
  /* margin-top: 100px; */
  button {
    box-sizing: border-box;
    width: 149px;
    height: 48px;
    padding-left: 32px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    float: right;
    border: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:focus {
      outline: none;
    }
  }

  img {
    margin-left: 6px;
    width: 20px;
    height: 18px;
  }
`;

const Button = ({ backgroundColor, color, onClick, border, isAble }) => {
  const hovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconBlue);
    event.target.style.cssText = `
        border: 1px solid #195BFF; 
        background-color: white; 
        color: #195BFF;
        cursor: pointer;
        fill: #195BFF;
      `;
  };

  const unhovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIcon);
    event.target.style.cssText = `
        border: none;
        background-color: #195BFF;
        color: white;
      `;
  };

  return (
    <SaveButtonWrap>
      {isAble ? (
        <button
          style={{
            backgroundColor: backgroundColor,
            color: color,
            border: border,
          }}
          onClick={onClick}
          onMouseEnter={hovered}
          onMouseLeave={unhovered}
        >
          {' '}
          활동 저장
          <img src={SaveIcon} alt="" />{' '}
        </button>
      ) : (
        <button
          style={{
            backgroundColor: backgroundColor,
            color: color,
            border: border,
          }}
        >
          {' '}
          활동 저장
          <img src={SaveIcon} alt="" />{' '}
        </button>
      )}
    </SaveButtonWrap>
  );
};

export default Button;
