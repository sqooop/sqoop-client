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
    width: 49.7vh;
    height: 68.8vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;

    &--title {
      font-size: 2.7vh;
      font-weight: bold;
      margin-top: 16.5vh;
      color: #195BFF;
    }

    &--guide {
      font-size: 1.6vh;
    }

    &--icon {
      margin: 6.6vh 0vh;
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
      width: 24vh;
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
      width: 24vh;
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
          width={'24vh'}
        />
      </div>
    </LastCardWrap>
  );
};

export default withRouter(LastCard);
