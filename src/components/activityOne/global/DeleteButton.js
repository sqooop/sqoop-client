import { React } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Delete } from '../../../assets/icons/DeleteButton.svg';
import DeleteModal from './DeleteModal';
import { setVisible } from '../../../store/modules/modal';

const DeleteButton = () => {
  const dispatch = useDispatch();
  const saveVisible = isVisible => dispatch(setVisible(isVisible));
  const isVisible = useSelector(state => state.modal.isVisible);
  const id = useSelector(state => state.paramsid.id);

  return (
    <>
      <StyledDelete onClick={() => saveVisible(true)}>
        <Delete />
      </StyledDelete>
      {isVisible && <DeleteModal id={id} saveVisible={saveVisible} />}
    </>
  );
};

const StyledDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
`;

export default DeleteButton;
