import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { RangePicker } = DatePicker;
const DateSelectorWrap = styled.div``;

const StyledRangePicker = styled(RangePicker)`
  height: 30px;
  width: 266px;
  border: none;
  &:hover {
    background-color: #eeeeee !important;
  }
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
