import React from 'react';
import { withRouter } from 'react-router-dom';
import LastCardIcon from '../../assets/icons/LastCardIcon.svg';
import SaveIconOn from '../../assets/icons/SaveIconOn.svg';
import SaveIconOnHover from '../../assets/icons/SaveIconOnHover.svg';
import Styled from 'styled-components';
import SaveButton from './SaveButton';

const LastCardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 358px;
    height: 496px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;

    &--title {
      font-size: 20px;
      font-weight: bold;
      margin-top: 119px;
      color: #195BFF;
    }

    &--guide {
      font-size: 12px;
    }

    &--icon {
      margin: 48px 0px;
    }
  }
`;

const LastCard = ({ history }) => {
  const onClickFunc = event => {
    history.push(`/detail/edit/0`);
  };

  const hovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconOnHover);
    event.target.style.cssText = `
      border: 1px solid #195BFF; 
      background-color: white; 
      color: #195BFF;
      cursor: pointer;
      width: 173px;
    `;
  };

  const unhovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconOn);
    event.target.style.cssText = `
      border: none;
      background-color: #195BFF;
      color: white;
      cursor: default;
      width: 173px;
    `;
  };

  return (
    <LastCardWrap>
      <div className="card">
        <div className="card--title">어느새 맛있는 경험 완성!</div>
        <div className="card--guide">모든 스쿱을 다 마쳤어요</div>
        <img className="card--icon" src={LastCardIcon} alt="" />
        <SaveButton
          backgroundColor="#195BFF"
          onClick={onClickFunc}
          onMouseEnter={hovered}
          onMouseLeave={unhovered}
          text={'전체 돌아보기'}
          width={'173px'}
        />
      </div>
    </LastCardWrap>
  );
};

export default withRouter(LastCard);
