import { React, useEffect } from 'react';
import palette from '../../lib/styles/palette';
import Styled from 'styled-components';
import { setCardArray } from '../../store/modules/home';
import { getCardAPI, getMonthAPI } from '../../lib/api/home/cardAPI';
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

const ButtonActive = ({ index, month }) => {
  const dispatch = useDispatch();
  const year = useSelector(state => state.home.year);
  const saveCards = data => dispatch(setCardArray(data));
  const monthId = year * 100 + month;
  const dataSet = new Map();

  useEffect(() => {
    (async () => {
      const data = await getMonthAPI();
      const saveCards = data => dispatch(setCardArray(data));
      for (let i = data.firstYear; i <= data.lastYear; i++) {
        dataSet.set(i, new Set());
      }
      data.allMonthArray
        .filter(item => item.length !== 0)
        .forEach(item => dataSet.get(Math.floor(item / 100)).add(item % 100));
      dataSet.get(year);
      const dataSetArray = Array.from(dataSet.get(year)); // 활동이 있는 월 배열로 바꿔줌
      const firstMonth = dataSetArray[0];
      const monthId = year * 100 + firstMonth;
      const cardData = await getCardAPI(monthId);
      saveCards(cardData);
    })();
  }, []);

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
