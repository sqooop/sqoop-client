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
      margin-top: 113px;
      color: #195BFF;
    }

    &--guide {
      margin-top: 6px;
      font-size: 12px;
    }

    &--icon {
      margin: 48px 0px;
    }
  }

  .rightToLeft {
    animation-name: rightGrow;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }

  @keyframes rightGrow {
    from {
      opacity: 0.5;
      transform-origin: top;
      -webkit-transform: translateZ(0);
      transform: translateX(278px) scaleX(0.743) scaleY(0.716);
    } to {
      opacity: 1;
      transform-origin: top;
      -webkit-transform: translateZ(0);
      transform: translateX(0px) scaleX(1) scaleY(1);
    }
  }
`;

const LastCard = ({ id, history }) => {
  const onClickFunc = event => {
    history.push(`/detail/${id}`);
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
      <div className="card rightToLeft">
        <div className="card--title">어느새 맛있는 경험 완성!</div>
        <div className="card--guide">
          작성한 내용을 한 번에 확인·수정해 보아요.
        </div>
        <img className="card--icon" src={LastCardIcon} alt="" />
        <SaveButton
          backgroundColor="#195BFF"
          onClick={onClickFunc}
          onMouseEnter={hovered}
          onMouseLeave={unhovered}
          text={'최종 검토하기'}
          width={'173px'}
        />
      </div>
    </LastCardWrap>
  );
};

export default withRouter(LastCard);
