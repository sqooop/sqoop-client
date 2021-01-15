import { setDetailStart, setDetailEnd } from '../../../store/modules/detail';
import { useDispatch } from 'react-redux';
import DateSelector from '../../../components/activityOne/edit/DateSelector';

const DateSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveDetailStart = data => dispatch(setDetailStart(data));
  const saveDetailEnd = data => dispatch(setDetailEnd(data));
  const onChange = (value, dateString) => {
    value = [];
    value.push(dateString[0].replace('-', '').replace('-', ''));
    value.push(dateString[1].replace('-', '').replace('-', ''));
    let start = dateString[0];
    let end = dateString[1];
    saveDetailStart(start);
    saveDetailEnd(end);
  };
  return <DateSelector onChange={onChange} />;
};

export default DateSelectorContainer;
