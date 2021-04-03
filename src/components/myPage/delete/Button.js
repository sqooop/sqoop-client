import React from 'react';
import Styled from 'styled-components';
import SaveIcon from '../../../assets/icons/SaveIcon.svg';
import SaveIconBlue from '../../../assets/icons/SaveIconBlue.svg';

const SaveButtonWrap = Styled.div`
  button {
    position: fixed;
    right: 14.2969vw;
    bottom: 6.6667vh;
    box-sizing: border-box;
    width: 14.9rem;
    height: 4.8rem;
    margin-right: 1.2rem;
    padding-left: 3.2rem;
    font-weight: bold;
    font-size: 1.6rem;
    color: white;
    float: right;
    border: 0.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:focus {
      outline: none;
    }
  }

  img {
    margin-left: 0.6rem;
    width: 2rem;
    height: 1.8rem;
  }
`;

const Button = ({ backgroundColor, color, onClick, border, isAble }) => {
  const Hovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconBlue);
    event.target.style.cssText = `
        border: 0.1rem solid #195BFF; 
        background-color: white; 
        color: #195BFF;
        cursor: pointer;
      `;
  };

  const UnHovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIcon);
    event.target.style.cssText = `
        border: none;
        background-color: #195BFF;
        color: white;
      `;
  };

  const Leaved = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIcon);
    event.target.style.cssText = `
        border: none;
        background-color: rgb(165, 165, 165);
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
          onMouseEnter={Hovered}
          onMouseLeave={UnHovered}
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
          onMouseEnter={Hovered}
          onMouseLeave={Leaved}
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
