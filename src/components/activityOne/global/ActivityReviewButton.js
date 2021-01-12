import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SqoopIcon } from '../../../assets/icons/SqoopIcon.svg';

const ActivityReviewButton = () => {
  return (
    <StyledButton>
      <ReviewButton>
        <SqoopIcon
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
  background: #ffffff;
  border: 1px solid #195bff;
  color: #195bff;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3vw;
  line-height: 150%;
`;

export default ActivityReviewButton;
