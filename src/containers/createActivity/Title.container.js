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
    let cnt = 0;
    for (let i = 0; i < value.length; i++) {
      if (cnt > 26) {
        break;
      }
      if (value[i] === ' ') {
        cnt += 1;
      } else if (value[i] === value[i].toUpperCase()) {
        cnt += 2;
      } else {
        cnt += 1;
      }
    }
    if (cnt <= 25) {
      saveTitle(value);
    }
  };
  return <Title onChangeInputs={onChangeInputs} title={title} />;
};

export default TitleContainer;
