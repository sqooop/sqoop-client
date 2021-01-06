import React from 'react';
import Styled from 'styled-components';
import palette from '../../lib/styles/palette';
import SaveIcon from '../../assets/icons/SaveIcon.svg';
import SaveIconBlue from '../../assets/icons/SaveIconBlue.svg';
const AddButtonWrap = Styled.div`
  margin-left: 90px;
  margin-top: 250px;
  width: 200px;
  button {
    outline: none;
    border: none;
    background: #195BFF;
    width: 170px;
    height: 50px;
    color: white;
    font-size: 17px;
    font-weight: 700;
    display: center;
    align-items: center;
    padding-right: 0rem;
    cursor: pointer;
    &:hover{
      background: ${palette.white};
      color: ${palette.main};
      border: solid 1px ${palette.main};
      const icon= ${SaveIconBlue};

    }
  }

  img {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-right: 4px;
  } 
`;
const AddButton = ({ background, color, onClick, border }) => {
  const hovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = SaveIconBlue);
    event.target.style.cssText = `
    border: 1px solid ${palette.main};
    background: ${palette.white};
    cursor: pointer;
    color: ${palette.main}
    fill: ${palette.main}
    `;
  };

  const unhovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = SaveIcon);
    event.target.style.cssText = `
    border: none;
    background: ${palette.main};
    color: white;
    `;
  };

  return (
    <AddButtonWrap>
      <button
        style={{
          background: background,
          color: color,
          border: border,
        }}
        onClick={onClick}
        onMouseEnter={hovered}
        onMouseLeave={unhovered}
      >
        {''}
        새 활동 추가
        <img src={SaveIcon} alt="" />
        {''}
      </button>
    </AddButtonWrap>
  );
};

export default AddButton;
