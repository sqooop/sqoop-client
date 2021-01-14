import React, { useEffect } from 'react';
import { setJobItems, setJobName } from '../../store/modules/jobTag';
import { setJob } from '../../store/modules/activity';
import { useDispatch, useSelector } from 'react-redux';
import TagSelector from '../../components/createActivity/TagSelector';
import { getHashtag } from '../../lib/api/hashtag';

const JobTagSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveItems = data => dispatch(setJobItems(data));
  const saveName = data => dispatch(setJobName(data));
  const saveJob = data => dispatch(setJob(data));

  const name = useSelector(state => state.jobTag.name);
  const items = useSelector(state => state.jobTag.items);
  const job = useSelector(state => state.activity.jobTag);

  useEffect(() => {
    (async () => {
      const data = await getHashtag();
      saveItems(data.jobTag);
    })();
  }, []);
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
