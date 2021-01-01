import React from 'react';
import { setSkillItems, setSkillName } from '../../store/modules/skillTag';
import { setSkill } from '../../store/modules/activity';
import { useDispatch, useSelector } from 'react-redux';
import TagSelector from '../../components/createActivity/TagSelector';

const JobTagSelectorContainer = () => {
  const dispatch = useDispatch();
  const saveItems = data => dispatch(setSkillItems(data));
  const saveName = data => dispatch(setSkillName(data));
  const saveSkill = data => dispatch(setSkill(data));
  const name = useSelector(state => state.skillTag.name);
  const items = useSelector(state => state.skillTag.items);

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
      placeholder="역량 태그 추가"
    />
  );
};

export default JobTagSelectorContainer;
