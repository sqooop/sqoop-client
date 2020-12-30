import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Complete } from '../../assets/icons/complete.svg';

const ActivityOneTitle = () => {
  const [editClick, setEditClick] = useState('EditIcon');
  const editStatus = editClick === 'EditIcon' ? true : false;
  const userData = 'Complete' ? true : false;

  const EditClick = () => {
    setEditClick('CompleteIcon');
  };

  const CompleteClick = () => {
    setEditClick('EditIcon');
  };

  return (
    <>
      <StyledActivityOneTitle>
        <span>라오스 봉사 활동</span>
        <StyledActivityOneButton>
          <Star /> <span>즐겨찾기</span>
          {editStatus ? (
            <StyledActivityOneEdit onClick={EditClick}>
              <Edit /> <span>편집하기</span>
            </StyledActivityOneEdit>
          ) : (
            <StyledActivityOneEdit onClick={CompleteClick}>
              <Complete /> <span>완료하기</span>
            </StyledActivityOneEdit>
          )}
        </StyledActivityOneButton>
      </StyledActivityOneTitle>
    </>
  );
};

const StyledActivityOneTitle = styled.div`
  display: flex;
  margin-top: 2.75rem;
  justify-content: space-between;

  & > span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
  }
`;

const StyledActivityOneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) > span {
    font-weight: 400;
  }
`;

const StyledActivityOneEdit = styled.div`
  width: 92px;
  text-align: right;

  &:nth-child(2) > span {
    font-weight: 400;
    line-height: 1.315rem;
  }
`;

export default ActivityOneTitle;
