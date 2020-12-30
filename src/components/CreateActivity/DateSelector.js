import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const DateSelector = props => {
  const onChange = props.onChange;
  return (
    <Space direction="vertical" size={12}>
      <RangePicker onChange={onChange} />
    </Space>
  );
};

export default DateSelector;
