import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Edit } from '../../../assets/icons/Edit.svg';
import { ReactComponent as Complete } from '../../../assets/icons/Complete.svg';

const EditButton = ({ history }) => {
  // 편집하기와 완료하기를 클릭하면 component를 변경하기 위한 state
  const [editClick, setEditClick] = useState('EditIcon');
  const editStatus = editClick === 'EditIcon' ? true : false;
  const id = useSelector(state => state.paramsid.id);
  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail);

  // 편집하기를 클릭하면 아이콘이 바뀌는 함수
  const EditClick = () => {
    setEditClick('CompleteIcon');
    history.push(`/detail/edit/${id}`);
  };

  // 완료하기를 클릭하면 아이콘이 바뀌는 함수
  const CompleteClick = () => {
    setEditClick('EditIcon');
    history.push(`/detail/${id}`);
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
`;

const StyledActivityOneEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.204rem;
  cursor: pointer;
`;

export default withRouter(EditButton);
