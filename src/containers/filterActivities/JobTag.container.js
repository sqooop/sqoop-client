import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tag from '../../components/filterActivities/Tag';
import { setJob, setAllJob, setAllSkill } from '../../store/modules/filter';
import { getHashtag } from '../../lib/api/hashtag';

const JobTagContainer = () => {
  const dispatch = useDispatch();
  const saveAllJob = data => dispatch(setAllJob(data));
  const saveAllSkill = data => dispatch(setAllSkill(data));
  const saveJob = data => dispatch(setJob(data));
  useEffect(() => {
    (async () => {
      const data = await getHashtag();
      saveAllJob(data.jobTag);
      saveAllSkill(data.skillTag);
    })();
  }, []);
  const allJobTag = useSelector(state => state.filter.allJobTag);
  const jobTag = useSelector(state => state.filter.jobTag);
  const saveTag = data => {
    saveJob([...jobTag, data]);
  };
  const deleteTag = data => {
    const idx = jobTag.indexOf(data);
    if (idx > -1) {
      jobTag.splice(idx, 1);
    }
    saveJob(jobTag);
  };
  return (
    <>
      {allJobTag.map(name => (
        <Tag key={name} name={name} saveTag={saveTag} deleteTag={deleteTag} />
      ))}
    </>
  );
};

export default JobTagContainer;
