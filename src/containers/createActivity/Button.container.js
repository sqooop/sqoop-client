import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVisible } from '../../store/modules/modal';
import Button from '../../components/createActivity/Button';
import { createActivity } from '../../lib/api/activity';

const ButtonContainer = () => {
  const dispatch = useDispatch();

  const activity = useSelector(state => state.activity);
  const { title, jobTag, skillTag } = activity;

  const saveVisible = data => dispatch(setVisible(data));
  const isVisible = useSelector(state => state.modal.isVisible);

  const toggleVisible = () => {
    saveVisible(!isVisible);
  };

  return (
    <>
      {title && skillTag.length > 0 && jobTag.length > 0 ? (
        <Button
          backgroundColor="#195BFF"
          onClick={toggleVisible}
          isAble={true}
        />
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
