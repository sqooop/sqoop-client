import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setVisible } from '../../store/modules/modal';
import Button from '../../components/CreateActivity/Button';

const ButtonContainer = () => {
  const dispatch = useDispatch();

  const activity = useSelector(state => state.activity);
  const { title, job, skill } = activity;

  const saveVisible = data => dispatch(setVisible(data));
  const isVisible = useSelector(state => state.modal.isVisible);

  const onClickFunc = event => {
    saveVisible(!isVisible);
    // 서버 통신
  };

  return (
    <>
      {title && skill.length > 0 && job.length > 0 ? (
        <Button backgroundColor="#195BFF" onClick={onClickFunc} isAble={true} />
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
