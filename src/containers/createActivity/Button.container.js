import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVisible } from '../../store/modules/modal';
import { setID } from '../../store/modules/userCardInfo';
import Button from '../../components/createActivity/Button';
import { createActivity } from '../../lib/api/activity';

const ButtonContainer = () => {
  const dispatch = useDispatch();

  const activity = useSelector(state => state.activity);
  const { title, jobTag, skillTag, endDate, startDate } = activity;

  const saveVisible = data => dispatch(setVisible(data));
  const saveID = data => dispatch(setID(data));
  const isVisible = useSelector(state => state.modal.isVisible);

  const onClick = async () => {
    saveVisible(!isVisible);
    const id = await createActivity(activity);
    const jsonID = JSON.stringify(id);
    sessionStorage.setItem('activityID', jsonID);
    saveID(id);
  };

  return (
    <>
      {title &&
      endDate &&
      startDate &&
      skillTag.length > 0 &&
      jobTag.length > 0 ? (
        <Button backgroundColor="#195BFF" onClick={onClick} isAble={true} />
      ) : (
        <Button
          backgroundColor="#A5A5A5"
          color="white"
          border="none"
          isAble={false}
        />
      )}
    </>
  );
};

export default ButtonContainer;
