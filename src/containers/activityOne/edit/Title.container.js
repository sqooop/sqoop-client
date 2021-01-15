import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailTitle } from '../../../store/modules/detail';
import Title from '../../../components/activityOne/edit/Title';
import getOneActivity from '../../../lib/api/activityOne/basic';

const TitleContainer = () => {
  const dispatch = useDispatch();
  const saveTitle = data => dispatch(setDetailTitle(data));

  const title = useSelector(state => state.detail.detailTitle);
  // const id = useSelector(state => state.paramsid.id);
  const id = 55;
  useEffect(() => {
    (async () => {
      const BasicData = await getOneActivity(id);
      saveTitle(BasicData.selectedActivity.title);
    })();
  }, [id]);

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
