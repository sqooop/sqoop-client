import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { RangePicker } = DatePicker;
const DateSelectorWrap = styled.div``;
const DateSelector = props => {
  const onChange = props.onChange;
  return (
    <DateSelectorWrap>
      <Space direction="vertical" size={12}>
        <RangePicker
          placeholder={['2021-01-01', '2021-02-01']}
          onChange={onChange}
          style={{
            height: '21px',
            width: '256px',
            border: 'none',
          }}
        />
      </Space>
    </DateSelectorWrap>
  );
};

export default DateSelector;
