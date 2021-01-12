import React from 'react';
import palette from '../../lib/styles/palette';
import Styled from 'styled-components';
import { setCardArray } from '../../store/modules/home';
import { getCardAPI } from '../../lib/api/home/cardAPI';
import { useDispatch, useSelector } from 'react-redux';
const ButtonActiveWrap = Styled.div`
  margin: 0 auto;
  margin-top: 10px;
  font-size: 15px;
  width: 45px;
  font-size: 10px;
  font-weight: bold !important;
  margin-bottom: 72px;
  border: 0;
  outline: 0;
  :hover {
    font-size: 15px;
    color: ${palette.main};
  }
`;

const ButtonActive = ({ index, month, onClickFunc }) => {
  const dispatch = useDispatch();
  // const saveMonth = data => dispatch(setMonth(data));
  const year = useSelector(state => state.home.year);
  const saveCards = data => dispatch(setCardArray(data));
  const monthId = year * 100 + month;
  const onClick = async () => {
    const data = await getCardAPI(monthId);
    saveCards(data);
  };
  return (
    <ButtonActiveWrap>
      <div key={index} onClick={onClick}>
        {month}월
      </div>
    </ButtonActiveWrap>
  );
};

export default ButtonActive;
