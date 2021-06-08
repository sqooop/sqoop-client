import React from 'react';
import styled from 'styled-components';
import SaveIconOnHover from '../../../assets/icons/SaveIconOnHover.svg';
import SaveIconOn from '../../../assets/icons/SaveIconOn.svg';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setID } from '../../../store/modules/userCardInfo';

const ActivityReviewButton = ({ history }) => {
  const id = useSelector(state => state.paramsid.id);

  const dispatch = useDispatch();
  const saveID = idx => dispatch(setID(idx));

  const onClickFunc = () => {
    saveID(id);
    const jsonID = JSON.stringify(id);
    sessionStorage.setItem('activityID', jsonID);
    history.push(`/steps/0`);
  };

  const hovered = event => {
    const image = event.target.querySelector('img');
    image && (image.src = SaveIconOnHover);
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
    image && (image.src = SaveIconOn);
    image && (image.style.border = 'none');
    event.target.style.cssText = `
      border: none;
      background-color: #195BFF;
      color: white;
      cursor: default;
    `;
  };

  return (
    <StyledButton>
      <ReviewButton
        onClick={onClickFunc}
        onMouseEnter={hovered}
        onMouseLeave={unhovered}
      >
        <img
          src={SaveIconOn}
          alt=""
          style={{
            width: '2.0vw',
            height: '1.7vw',
            marginRight: '4px',
          }}
        />
        활동 돌아보기
      </ReviewButton>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  margin-top: 3.1vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewButton = styled.div`
  width: 13.5vw;
  height: 3.1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #195bff;
  border: none;
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3vw;
  line-height: 150%;
`;

export default withRouter(ActivityReviewButton);
