import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setYear,
  setMonth,
  setDay,
  setBirth,
} from '../../store/modules/findEmail';
import Birth from '../../components/signUp/Birth';

const BirthContainer = () => {
  const dispatch = useDispatch();
  const saveYear = data => dispatch(setYear(data));
  const saveMonth = data => dispatch(setMonth(data));
  const saveDay = data => dispatch(setDay(data));
  const saveBirth = data => dispatch(setBirth(data));

  const year = useSelector(state => state.findEmail.year);
  const month = useSelector(state => state.findEmail.month);
  const day = useSelector(state => state.findEmail.day);

  const onChangeYear = evt => {
    saveYear(evt);
  };
  const onChangeMonth = evt => {
    saveMonth(evt);
  };
  const onChangeDay = evt => {
    saveDay(evt);
  };
  if (year !== '' && month !== '' && day !== '') {
    let m = month.length >= 2 ? month : '0' + month;
    let d = day.length >= 2 ? day : '0' + day;
    saveBirth(year + m + d);
  }
  return (
    <>
      <Birth
        onChangeYear={onChangeYear}
        onChangeMonth={onChangeMonth}
        onChangeDay={onChangeDay}
      />
    </>
  );
};

export default BirthContainer;
