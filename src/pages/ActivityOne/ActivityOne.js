import React from 'react';
import styled from 'styled-components';
import ActivityOneTitle from '../../components/ActivityOne/ActivityOneTitle';
import PhotoUpload from '../../components/common/PhotoUpload';
import DefaultData from '../../components/common/DefaultData';
import DateSelector from '../../containers/createActivity/DateSelector.container';
import Group from '../../containers/createActivity/Group.container';
import JobTagSelector from '../../containers/common/JobTagSelector.container';
import SkillTagSelector from '../../containers/common/SkillTagSelector.container';
import Summary from '../../containers/createActivity/Summary.container';
import FileUpload from '../../components/common/FileUpload';
import ActivityOneUserData from '../../components/ActivityOne/ActivityOneUserData';

const ActivityOne = () => {
  return (
    <StyledActivityOneWrap>
      <ActivityOneTitle />
      <StyledActivityUserData>
        <div>
          <PhotoUpload />
          <div>
            <DefaultData />
            <div>
              <DateSelector />
              <Group />
              <JobTagSelector />
              <SkillTagSelector />
              <FileUpload />
              <Summary />
            </div>
          </div>
        </div>
        <ActivityOneUserData />
      </StyledActivityUserData>
    </StyledActivityOneWrap>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 11.438rem;
  padding-right: 13.438rem;

  @media screen and (max-width: 868px) {
    padding-left: 6.438rem;
    padding-right: 6.438rem;
  }
`;

const StyledActivityUserData = styled.div`
  display: flex;

  & > div > div {
    display: flex;
  }

  @media screen and (max-width: 868px) {
    display: block;
  }
`;

export default ActivityOne;
