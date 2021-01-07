import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import { ReactComponent as Complete } from '../../../assets/icons/complete.svg';

const EditButton = () => {
  // 편집하기와 완료하기를 클릭하면 component를 변경하기 위한 state
  const [editClick, setEditClick] = useState('EditIcon');
  const editStatus = editClick === 'EditIcon' ? true : false;

  // 편집하기를 클릭하면 아이콘이 바뀌는 함수
  const EditClick = () => {
    setEditClick('CompleteIcon');
  };

  // 완료하기를 클릭하면 아이콘이 바뀌는 함수
  const CompleteClick = () => {
    setEditClick('EditIcon');
  };

  return (
    <StyledActivityOneButton>
      {editStatus ? (
        <StyledActivityOneEdit onClick={EditClick}>
          <Edit />
        </StyledActivityOneEdit>
      ) : (
        <StyledActivityOneEdit onClick={CompleteClick}>
          <Complete />
        </StyledActivityOneEdit>
      )}
    </StyledActivityOneButton>
  );
};

const StyledActivityOneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
`;

const StyledActivityOneEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.204rem;
`;

export default EditButton;
