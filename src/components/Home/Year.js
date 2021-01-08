import React, { useReducer } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

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

const Year = () => {
  const [state, dispatch] = useReducer(reducer, { value: 2019 });
  return (
    <YearTemplate>
      <YearWrapper>
        <MdKeyboardArrowUp
          onClick={() => dispatch({ type: 'INCREMENT' })}
        ></MdKeyboardArrowUp>
        <StateWrapper>{state.value}</StateWrapper>
        <MdKeyboardArrowDown
          onClick={() => dispatch({ type: 'DECREMENT' })}
        ></MdKeyboardArrowDown>
      </YearWrapper>
    </YearTemplate>
  );
};

const YearTemplate = styled.div`
  float: left;
  display: inline;
  margin-left: 0;
  clear: both;
  width: 40px;
  text-align: center;
`;
const YearWrapper = styled.div`
  left: 0;
  width: 30px;
  margin: 0 auto;
`;
const StateWrapper = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export default Year;
