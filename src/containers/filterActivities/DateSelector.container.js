import { setDate } from '../../store/modules/filter';
import { useDispatch } from 'react-redux';
import DateSelector from '../../components/filterActivities/DateSelector';

const DateSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveDate = data => dispatch(setDate(data));
  const onChange = (value, dateString) => {
    value = [];
    value.push(dateString[0].replace('-', '').replace('-', ''));
    value.push(dateString[1].replace('-', '').replace('-', ''));
    saveDate(value);
  };
  return <DateSelector onChange={onChange} />;
};

export default DateSelectorContainer;
