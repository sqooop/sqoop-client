import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LeftButtonIconOn from '../../assets/icons/LeftButtonIconOn.svg';
import LeftButtonIconOff from '../../assets/icons/LeftButtonIconOff.svg';
import RightButtonIconOn from '../../assets/icons/RightButtonIconOn.svg';
import RightButtonIconOff from '../../assets/icons/RightButtonIconOff.svg';
import { setYear } from '../../store/modules/home';

const Year = ({ background, border, onClick }) => {
  const dispatch = useDispatch();
  const saveYear = number => dispatch(setYear(number));
  const year = useSelector(state => state.home.year);

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
