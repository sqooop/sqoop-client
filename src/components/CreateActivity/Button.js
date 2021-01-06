import React from 'react';
import Styled from 'styled-components';
import SaveIcon from '../../assets/icons/SaveIcon.svg';
import SaveIconBlue from '../../assets/icons/SaveIconBlue.svg';
// 화면 전체 양옆 padding 확정되면 버튼 위치 조정해라
const SaveButtonWrap = Styled.div`
  button {
    position: absolute;
    bottom: 5.2rem;
    right: 20rem;
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
  const hovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconBlue);
    event.target.style.cssText = `
        border: 0.1rem solid #195BFF; 
        background-color: white; 
        color: #195BFF;
        cursor: pointer;
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
