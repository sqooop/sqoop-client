import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tag from '../../components/filterActivities/Tag';
import { setSkill } from '../../store/modules/filter';

const SkillTagContainer = () => {
  const dispatch = useDispatch();
  const saveSkill = data => dispatch(setSkill(data));
  const allSkillTag = useSelector(state => state.filter.allSkillTag);
  const skillTag = useSelector(state => state.filter.skillTag);
  const saveTag = data => {
    saveSkill([...skillTag, data]);
  };
  const deleteTag = data => {
    const idx = skillTag.indexOf(data);
    if (idx > -1) {
      skillTag.splice(idx, 1);
    }
    saveTag(skillTag);
  };
  return (
    <>
      {allSkillTag.map(name => (
        <Tag key={name} name={name} saveTag={saveTag} deleteTag={deleteTag} />
      ))}
    </>
  );
};

export default SkillTagContainer;
