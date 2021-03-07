import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

const { Option } = Select;

const StyledSpan = styled.span`
  margin-left: 2px;
  font-size: 12px;
  width: 92px;
  display: inline-block;
`;
const StyledSelect = styled(Select)`
  width: 88px;
  font-size: 10px;
  .ant-select-selector {
    height: 27px !important;
  }
`;
const InputWrap = styled.div`
  margin: 0 auto;
  width: 358px;
  margin-top: 38px;
  position: relative;
  .line {
    position: absolute;
    left: 0px;
    top: 23px;
  }
`;
const Birth = props => {
  let years = [];
  for (let i = 2020; i >= 1950; i--) {
    years.push(i);
  }
  let days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  const { onChangeYear, onChangeMonth, onChangeDay } = props;
  return (
    <InputWrap>
      <StyledSpan>생년월일</StyledSpan>
      <StyledSelect onChange={onChangeYear} placeholder="연도">
        {years.map(item => (
          <Option value={item}>{item}</Option>
        ))}
      </StyledSelect>
      <StyledSelect onChange={onChangeMonth} placeholder="월">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
          <Option value={item}>{item}</Option>
        ))}
      </StyledSelect>
      <StyledSelect onChange={onChangeDay} placeholder="일">
        {days.map(item => (
          <Option value={item}>{item}</Option>
        ))}
      </StyledSelect>
    </InputWrap>
  );
};
export default Birth;
