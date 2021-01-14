import React from 'react';
import { setJobItems, setJobName } from '../../store/modules/jobTag';
import { setDetailJob } from '../../store/modules/detail';
import { useDispatch, useSelector } from 'react-redux';
import TagSelector from '../../components/activityOne/edit/TagSelector';

const JobTagSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveItems = data => dispatch(setJobItems(data));
  const saveName = data => dispatch(setJobName(data));
  const saveJob = data => dispatch(setDetailJob(data));

  const name = useSelector(state => state.jobTag.name);
  const items = useSelector(state => state.jobTag.items);
  const job = useSelector(state => state.detail.detailJobTag);

  const onNameChange = event => {
    saveName(event.target.value);
  };

  const addItem = () => {
    if (name !== '' && !items.includes(`#${name}`)) {
      saveItems([...items, `#${name}`]);
    }
    saveName('');
  };

  const onChange = event => {
    saveJob(event);
  };

  return (
    <TagSelector
      onNameChange={onNameChange}
      onChange={onChange}
      addItem={addItem}
      items={items}
      name={name}
      placeholder="직무 태그 추가"
      selected={job}
    />
  );
};

export default JobTagSelectorContainer;
