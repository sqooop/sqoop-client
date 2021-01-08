import { React, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Delete } from '../../../assets/icons/DeleteButton.svg';

const DeleteButton = () => {
  // 삭제하는 버튼 위에 마우스를 hover 했을 때 아이콘을 변경하고
  // 삭제하기 기능 구현을 위한 state
  const [deleteClick, setDeleteClick] = useState('DeleteIcon');

  // 삭제하기 버튼
  const DeleteClick = () => {
    setDeleteClick();
  };

  return (
    <StyledDelete onClick={DeleteClick}>
      <Delete />
    </StyledDelete>
  );
};

const StyledDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

export default DeleteButton;
