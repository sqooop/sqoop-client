import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../../store/modules/activity';
import Title from '../../components/createActivity/Title';

const TitleContainer = () => {
  const dispatch = useDispatch();
  const saveTitle = data => dispatch(setTitle(data));

  const title = useSelector(state => state.activity.title);

  const onChangeInputs = evt => {
    const value = evt.target.value;
    saveTitle(value);
  };
  return <Title onChangeInputs={onChangeInputs} title={title} />;
};

export default TitleContainer;
