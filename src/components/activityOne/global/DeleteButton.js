import { React } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Delete } from '../../../assets/icons/DeleteButton.svg';
import { deleteActivity } from '../../../lib/api/activity';
const DeleteButton = ({ history }) => {
  const id = useSelector(state => state.paramsid.id);
  const DeleteClick = async () => {
    await deleteActivity(id);
    history.goBack();
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
  cursor: pointer;
`;

export default withRouter(DeleteButton);
