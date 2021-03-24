import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCardArray } from '../../store/modules/home';
import { getCardAPI, getMonthAPI } from '../../lib/api/home/cardAPI';
import LeftButtonIconOn from '../../assets/icons/LeftButtonIconOn.svg';
import LeftButtonIconOff from '../../assets/icons/LeftButtonIconOff.svg';
import RightButtonIconOn from '../../assets/icons/RightButtonIconOn.svg';
import RightButtonIconOff from '../../assets/icons/RightButtonIconOff.svg';
import { setYear, setFirstYear, setLastYear } from '../../store/modules/home';

const Year = ({ background, border, onClick }) => {
  const dispatch = useDispatch();
  const year = useSelector(state => state.home.year);
  const saveYear = number => dispatch(setYear(number));
  const dataSet = new Map();
  const saveFirstYear = number => dispatch(setFirstYear(number));
  const saveLastYear = number => dispatch(setLastYear(number));
  const firstYear = useSelector(state => state.home.firstYear);
  const lastYear = useSelector(state => state.home.lastYear);

  const [dataSetArray, setDataSetArray] = useState('');

  useEffect(() => {
    (async () => {
      const data = await getMonthAPI();
      const saveCards = data => dispatch(setCardArray(data));
      for (let i = data.firstYear; i <= data.lastYear; i++) {
        dataSet.set(i, new Set());
      }

      saveFirstYear(data.firstYear);
      saveLastYear(data.lastYear);
      data.allMonthArray
        .filter(item => item.length !== 0)
        .forEach(item => dataSet.get(Math.floor(item / 100)).add(item % 100));

      const dataMonth = dataSet.get(year);

      // const dataSetArray = Array.from(dataSet.get(year)); // 활동이 있는 월 배열로 바꿔줌

      if (dataMonth !== undefined) {
        setDataSetArray(Array.from(dataMonth));
      }

      const firstMonth = dataSetArray[0];
      const monthId = year * 100 + firstMonth;
      const cardData = await getCardAPI(monthId);
      saveCards(cardData);
    })();
  }, [year]);

  const leftHovered = event => {};
  const rightHovered = event => {};
  const onClickLeft = event => {
    saveYear(year - 1);
  };
  const onClickRight = event => {
    saveYear(year + 1);
  };

  /*   const leftHovered = event => {
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
  const onClickLeft = event => {
    const img = event.target.querySelector('img');
    img && (img.src = LeftButtonIconOff);
    event.target.style.cssText = `
      cursor: default;
    `;
  };
  const onClickRight = event => {
    const img = event.target.querySelector('img');
    img && (img.src = RightButtonIconOff);
    event.target.style.cssText = `
    cursor: default;
  `;
  }; */
  //console.log('fyear : ', firstYear);
  //console.log('lyear :', lastYear);
  //console.log(year);
  return (
    <YearTemplate>
      <div className="button">
        {firstYear != null && year > firstYear ? (
          <img
            className="button--left buttonOn"
            src={LeftButtonIconOn}
            alt=""
            onClick={onClickLeft}
            onMouseEnter={leftHovered}
          />
        ) : (
          <img
            className="button--left"
            src={LeftButtonIconOff}
            alt=""
            onMouseEnter={leftHovered}
          />
        )}

        <StateWrapper>{year}</StateWrapper>
        {year < lastYear ? (
          <img
            className="button--right buttonOn"
            src={RightButtonIconOn}
            alt=""
            onClick={onClickRight}
            onMouseEnter={rightHovered}
          />
        ) : (
          <img
            className="button--right"
            src={RightButtonIconOff}
            alt=""
            onMouseEnter={rightHovered}
          />
        )}
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
<<<<<<< HEAD
=======
      &:hover {
      }
>>>>>>> 2451068b34357ce8ce7456a47d60c72242cb6ac6
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

  .buttonOn:hover {
    cursor: pointer;
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
