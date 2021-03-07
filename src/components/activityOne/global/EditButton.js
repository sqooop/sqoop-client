import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Edit } from '../../../assets/icons/Edit.svg';
import { ReactComponent as Complete } from '../../../assets/icons/Complete.svg';
import EditApi from '../../../lib/api/activityOne/edit';
import { setEditMode } from '../../../store/modules/editButton';

const EditButton = ({ history }) => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.paramsid.id);
  const detail = useSelector(state => state.detail);
  const userdata = useSelector(state => state.userdata);
  const isEditMode = useSelector(state => state.editButton.isEditMode);
  const saveEditMode = data => dispatch(setEditMode(data));
  const EditClick = () => {
    saveEditMode(true);
    history.push(`/detail/edit/${id}`);
  };

  const CompleteClick = async () => {
    saveEditMode(false);
    let questions = [];
    let contents = [];
    for (let i = 1; i < 11; i++) {
      questions.push(userdata.question[i]);
      contents.push(userdata.useranswer[i]);
    }
    const data = {
      title: detail.detailTitle,
      startDate: detail.detailStart,
      endDate: detail.detailEnd,
      group: detail.detailGroup,
      summary: detail.detailSummary,
      imageUrl: detail.detailImageUrl,
      fileUrl: detail.detailFileUrl,
      jobTag: detail.detailJobTag,
      skillTag: detail.detailSkillTag,
      ActivityId: id,
      questions,
      contents,
    };
    await EditApi(data);
    history.push(`/detail/${id}`);
  };

  return (
    <StyledActivityOneButton>
      {isEditMode ? (
        <StyledActivityOneEdit onClick={CompleteClick}>
          <Complete />
        </StyledActivityOneEdit>
      ) : (
        <StyledActivityOneEdit onClick={EditClick}>
          <Edit />
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
