import React from 'react';
import Styled from 'styled-components';
import SaveIconBlue from '../../assets/icons/SaveIcon.svg';
import SaveIcon from '../../assets/icons/SaveIconBlue.svg';
import { withRouter } from 'react-router-dom';
const SaveButtonWrap = Styled.div`
margin-left: 90px;
margin-bottom: 113px;
  color: white;
  display: flex;
  align-items: center;
`;
const AddButton = Styled.div`
background: blue;
align-items: center;    
  width: 170px;
  height: 50px;
  display: flex;
  justify-content: center;
  border: none;
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3vw;
  line-height: 150%;
`;

const Button = ({ history }) => {
  const onClickFunc = () => {
    history.push('/create');
  };
  const hovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIcon);
    image && (image.style.border = 'none');
    event.target.style.cssText = `
    border: 1px solid #195BFF; 
    background-color: white; 
    color: #195BFF;
    cursor: pointer;
      `;
  };

  const unhovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconBlue);
    image && (image.style.border = 'none');
    event.target.style.cssText = `
    border: none;
    background-color: #195BFF;
    color: white;
    cursor: default;
      `;
  };

  return (
    <SaveButtonWrap>
      <AddButton
        onClick={() => history.push('/create')}
        onMouseEnter={hovered}
        onMouseLeave={unhovered}
      >
        새 활동 추가{' '}
        <img
          src={SaveIconBlue}
          alt=""
          style={{
            width: '2.0vw',
            height: '1.7vw',
            marginLeft: '4px',
          }}
        />{' '}
      </AddButton>
    </SaveButtonWrap>
  );
};

export default withRouter(Button);
