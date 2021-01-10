import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { RangePicker } = DatePicker;
const DateSelectorWrap = styled.div``;

const StyledRangePicker = styled(RangePicker)`
  height: 3rem;
  width: 315px;
  border: none;
  margin-top: 8px;
`;
const DateSelector = props => {
  const onChange = props.onChange;
  return (
    <DateSelectorWrap>
      <Space direction="vertical" size={12}>
        <StyledRangePicker
          suffixIcon=""
          placeholder={['2021-01-01', '2021-02-01']}
          onChange={onChange}
        />
      </Space>
    </DateSelectorWrap>
  );
};

export default DateSelector;
