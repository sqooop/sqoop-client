import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { RangePicker } = DatePicker;
const DateSelectorWrap = styled.div``;

const StyledRangePicker = styled(RangePicker)`
  height: 1.6vw;
  width: 18.8vw;
  border: none;
  padding: 0px !important;

  &:hover {
    background-color: #eeeeee !important;
  }
`;

const DateSelector = props => {
  const { startPlaceholer, endPlaceholer, onChange } = props;
  return (
    <DateSelectorWrap>
      <StyledRangePicker
        suffixIcon=""
        placeholder={[startPlaceholer, endPlaceholer]}
        onChange={onChange}
        style={{ fontSize: '1vw' }}
      />
    </DateSelectorWrap>
  );
};

export default DateSelector;
