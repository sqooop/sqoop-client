import React, { useReducer } from 'react';
import styled from 'styled-components';
import LeftButtonIconOn from '../../assets/icons/LeftButtonIconOn.svg';
import LeftButtonIconOff from '../../assets/icons/LeftButtonIconOff.svg';
import RightButtonIconOn from '../../assets/icons/RightButtonIconOn.svg';
import RightButtonIconOff from '../../assets/icons/RightButtonIconOff.svg';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Year = ({ background, border, onClick }) => {
  const [state, dispatch] = useReducer(reducer, { value: 2021 });
  const leftHovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = LeftButtonIconOn);
    event.target.style.cssText = `
    background: none;
    border: none;
    `;
  };
  const rightHovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = RightButtonIconOn);
  };
  const leftUnhovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = LeftButtonIconOff);
    event.target.style.cssText = `
    background: none;
    border: none;
    `;
  };
  const rightUnhovered = event => {
    const img = event.target.querySelector('img');
    img && (img.src = RightButtonIconOff);
  };
  return (
    <YearTemplate>
      <YearWrapper>
        <LeftButtonWrapper>
          <button
            style={{ background: background, border: border }}
            onClick={() => dispatch({ type: 'DECREMENT' })}
            onMouseEnter={leftHovered}
            onMouseLeave={leftUnhovered}
          >
            <img src={LeftButtonIconOff} alt="" />
          </button>
        </LeftButtonWrapper>
        <StateWrapper>{state.value}</StateWrapper>
        <RightButtonWrapper
          onClick={() => dispatch({ type: 'INCREMENT' })}
          onMouseEnter={rightHovered}
          onMouseLeave={rightUnhovered}
        >
          <img src={RightButtonIconOff} alt="" />
        </RightButtonWrapper>
      </YearWrapper>
    </YearTemplate>
  );
};

const LeftButtonWrapper = styled.div`
width: 24px;
flex: 1;
button {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  $:hover {
    const icon=${LeftButtonIconOn};
    
  }
}
`;
const RightButtonWrapper = styled.div`
width: 24px;
flex: 1;
button {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  $:hover {
    const icon=${RightButtonIconOn};
    
  }
}
`;
const YearTemplate = styled.div`
  position: relative;
  width: 109px;
  display: flex;
`;
const YearWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;
const StateWrapper = styled.div`
  margin-left: 10px;
  margin-right: 13px;
  flex: 1;
  font-weight: bold !important;
  font-size: 16px;
`;

export default Year;
