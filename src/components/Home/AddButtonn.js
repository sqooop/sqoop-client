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
    background: #195BFF;
    width: 170px;
    height: 50px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
      background: ${palette.white};
      color: ${palette.main};
      border: solid 1px ${palette.main};
      const icon= ${SaveIconBlue};
      cursor: pointer;
    }
  }

  img {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-right: 4px;
  } 
`;
const AddButton = ({ history }) => {
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
        onClick={() => history.push('/create')}
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

export default withRouter(AddButton);
