import { setDate } from '../../store/modules/activity';
import { useDispatch } from 'react-redux';
import DateSelector from '../../components/createActivity/DateSelector';

const DateSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveDate = data => dispatch(setDate(data));
  const onChange = (value, dateString) => {
    saveDate(dateString);
  };
  return <DateSelector onChange={onChange} />;
};

export default DateSelectorContainer;
