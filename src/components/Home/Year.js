import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCardArray } from '../../store/modules/home';
import { getCardAPI, getMonthAPI } from '../../lib/api/home/cardAPI';
import LeftButtonIconOn from '../../assets/icons/LeftButtonIconOn.svg';
import LeftButtonIconOff from '../../assets/icons/LeftButtonIconOff.svg';
import RightButtonIconOn from '../../assets/icons/RightButtonIconOn.svg';
import RightButtonIconOff from '../../assets/icons/RightButtonIconOff.svg';
import { setYear } from '../../store/modules/home';

const Year = ({ background, border, onClick }) => {
  const dispatch = useDispatch();
  const saveYear = number => dispatch(setYear(number));
  const year = useSelector(state => state.home.year);
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
      console.log('1st month', firstMonth);
      console.log('YEAR DATA SET', dataSet.get(year));
    })();
  }, []);
  const leftHovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = LeftButtonIconOn);
    event.target.style.cssText = `
      cursor: pointer;

    `;
  };
  const rightHovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = RightButtonIconOn);
    event.target.style.cssText = `
      cursor: pointer;
    `;
  };
  const leftUnhovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = LeftButtonIconOff);
    event.target.style.cssText = `

      cursor: default;

    `;
  };
  const rightUnhovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = RightButtonIconOff);
    event.target.style.cssText = `
    cursor: default;
  `;
  };
  return (
    <YearTemplate>
      <div className="button">
        <button
          className="button--left"
          style={{ background: background, border: border }}
          onClick={() => saveYear(year - 1)}
          onMouseEnter={leftHovered}
          onMouseLeave={leftUnhovered}
        >
          <img src={LeftButtonIconOff} alt="" />
        </button>
        <StateWrapper>{year}</StateWrapper>
        <button
          className="button--right"
          style={{ background: background, border: border }}
          onClick={() => saveYear(year + 1)}
          onMouseEnter={rightHovered}
          onMouseLeave={rightUnhovered}
        >
          <img src={RightButtonIconOff} alt="" />
        </button>
      </div>
    </YearTemplate>
  );
};

const YearTemplate = styled.div`
  position: relative;
  width: 109px;
  display: flex;

  margin: 0 auto;

  .button {
    display: flex;
    margin: 0 auto;

    &--left {
      width: 24px;
      height: 24px;
      flex: 1;
      background: none;
      border: none;
      &:focus {
        outline: none;
      }
    }
    &--right {
      width: 24px;
      height: 24px;
      flex: 1;
      background: none;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
`;

const StateWrapper = styled.div`
  margin-left: 10px;
  margin-right: 13px;
  flex: 1;
  font-weight: bold !important;
  font-size: 16px;
`;

export default Year;
