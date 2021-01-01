import React from 'react';
import { setItems, setName } from '../../store/modules/hashtag';
import { setSkill } from '../../store/modules/activity';
import { useDispatch, useSelector } from 'react-redux';
import TagSelector from '../../components/CreateActivity/TagSelector';

const JobTagSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveItems = data => dispatch(setItems(data));
  const saveName = data => dispatch(setName(data));
  const saveSkill = data => dispatch(setSkill(data));
  const name = useSelector(state => state.hashtags.name);
  const items = useSelector(state => state.hashtags.items);

  const onNameChange = event => {
    saveName(event.target.value);
  };
  const addItem = () => {
    if (name != null) {
      saveItems([...items, { value: `#${name}` }]);
    }
    saveName('');
  };
  const onChange = event => {
    saveSkill(event);
  };
  return (
    <TagSelector
      onNameChange={onNameChange}
      onChange={onChange}
      addItem={addItem}
      items={items}
      name={name}
    />
  );
};

export default JobTagSelectorContainer;
