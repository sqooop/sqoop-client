import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailSummary } from '../../../store/modules/detail';
import Summary from '../../../components/activityOne/edit/Summary';

const TitleContainer = () => {
  const dispatch = useDispatch();
  const saveSummary = data => dispatch(setDetailSummary(data));

  const summary = useSelector(state => state.detail.detailSummary);

  const onChangeInputs = evt => {
    const value = evt.target.value;
    if (value.length <= 50) {
      saveSummary(value);
    }
  };

  return <Summary onChangeInputs={onChangeInputs} text={summary} />;
};

export default TitleContainer;
