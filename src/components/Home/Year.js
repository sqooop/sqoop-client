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
        {state.value}
        <MdKeyboardArrowDown
          onClick={() => dispatch({ type: 'DECREMENT' })}
        ></MdKeyboardArrowDown>
      </YearWrapper>
    </YearTemplate>
  );
};

const YearTemplate = styled.div`
  width: 40px;
  text-align: center;
`;
const YearWrapper = styled.div`
  width: 30px;
  margin: 0 auto;
`;

export default Year;
