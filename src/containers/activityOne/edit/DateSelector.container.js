import { setDetailStart, setDetailEnd } from '../../../store/modules/detail';
import { useDispatch, useSelector } from 'react-redux';
import DateSelector from '../../../components/activityOne/edit/DateSelector';

const DateSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveDetailStart = data => dispatch(setDetailStart(data));
  const saveDetailEnd = data => dispatch(setDetailEnd(data));
  const detailStart = useSelector(state => state.detail.detailStart);
  const detailEnd = useSelector(state => state.detail.detailEnd);

  const startPlaceholer =
    detailStart.substr(0, 4) +
    '-' +
    detailStart.substr(4, 2) +
    '-' +
    detailStart.substr(6, 2);
  const endPlaceholer =
    detailEnd.substr(0, 4) +
    '-' +
    detailEnd.substr(4, 2) +
    '-' +
    detailEnd.substr(6, 2);
  const onChange = (value, dateString) => {
    value = [];
    value.push(dateString[0].replace('-', '').replace('-', ''));
    value.push(dateString[1].replace('-', '').replace('-', ''));
    let start = dateString[0];
    let end = dateString[1];
    saveDetailStart(start);
    saveDetailEnd(end);
  };
  return (
    <DateSelector
      onChange={onChange}
      startPlaceholer={startPlaceholer}
      endPlaceholer={endPlaceholer}
    />
  );
};

export default DateSelectorContainer;
