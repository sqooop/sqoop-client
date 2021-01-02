import { React } from 'react';
import styled from 'styled-components';
import Title from '../../containers/createActivity/Title.container';
import Button from '../../containers/createActivity/Button.container';
import DateSelector from '../../containers/createActivity/DateSelector.container';
import Group from '../../containers/createActivity/Group.container';
import JobTagSelector from '../../containers/common/JobTagSelector.container';
import SkillTagSelector from '../../containers/common/SkillTagSelector.container';
import Summary from '../../containers/createActivity/Summary.container';
import DefaultData from '../../components/createActivity/DefaultData';

const CreateActivityWrap = styled.div`
  padding-left: 18.3rem;
  padding-right: 18.3rem;
  /* background-color: red; */
  position: relative;
`;
const CreateActivity = () => {
  return (
    <CreateActivityWrap>
      <Title />
      <DefaultData />
      <DateSelector />
      <Group />
      <JobTagSelector />
      <SkillTagSelector />
      <Summary />
      {/* <Button /> */}
    </CreateActivityWrap>
  );
};

export default CreateActivity;
