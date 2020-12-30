import React from 'react';
import { setItems, setName } from '../../store/modules/hashtag';
import { useDispatch, useSelector } from 'react-redux';
import TagSelector from '../../components/createActivity/TagSelector';

const TagSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveItems = data => dispatch(setItems(data));
  const saveName = data => dispatch(setName(data));
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
  return (
    <TagSelector
      onNameChange={onNameChange}
      addItem={addItem}
      items={items}
      name={name}
    />
  );
};

export default TagSelectorContainer;
