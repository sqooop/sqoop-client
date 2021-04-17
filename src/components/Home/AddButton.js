import React from 'react';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';
import palette from '../../lib/styles/palette';
import SaveIcon from '../../assets/icons/SaveIcon.svg';
import SaveIconBlue from '../../assets/icons/SaveIconBlue.svg';

const AddButtonWrap = Styled.div`
  margin-left: 90px;
  margin-bottom: 53px;
  button {
    outline: none;
    border: none;
    background: white;
    width: 170px;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;


  }

  img {
    width: 160px;
    height: 50px;
  } 
`;
const AddButton = ({ backgroundColor, color, onClick, border }) => {
  const hovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = SaveIconBlue);
    event.target.style.cssText = `
    border: 0.1rem solid #195BFF; 
    background-color: white; 
    color: #195BFF;
    cursor: pointer;
    `;
  };

  const unhovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = SaveIcon);
    event.target.style.cssText = `
    cursor: pointer;
    border: none;
    background: #195BFF;
    color: white;
    `;
  };

  return (
    <AddButtonWrap>
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
        새 활동 추가
        <img src={SaveIcon} alt="" />{' '}
      </button>
    </AddButtonWrap>
  );
};

export default withRouter(AddButton);
