import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSummary } from '../../store/modules/activity';
import Summary from '../../components/createActivity/Summary';

const TitleContainer = () => {
  const dispatch = useDispatch();
  const saveSummary = data => dispatch(setSummary(data));

  const summary = useSelector(state => state.activity.summary);
  useEffect(() => {
    saveSummary('');
  }, []);
  const onChangeInputs = evt => {
    const value = evt.target.value;
    if (value.length <= 50) {
      saveSummary(value);
    }
  };
  return <Summary onChangeInputs={onChangeInputs} text={summary} />;
};

export default TitleContainer;
