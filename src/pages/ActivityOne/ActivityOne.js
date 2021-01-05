import React from 'react';
import styled from 'styled-components';
import ActivityOneTitle from '../../components/ActivityOne/ActivityOneTitle';
import PhotoUpload from '../../components/ActivityOne/PhotoUpload';
import DefaultData from '../../components/createActivity/DefaultData';
import DateSelector from '../../containers/createActivity/DateSelector.container';
import Group from '../../containers/createActivity/Group.container';
import JobTagSelector from '../../containers/common/JobTagSelector.container';
import SkillTagSelector from '../../containers/common/SkillTagSelector.container';
import Summary from '../../containers/createActivity/Summary.container';
import FileUpload from '../../components/ActivityOne/FileUpload';
import ActivityOneUserData from '../../components/ActivityOne/ActivityOneUserData';

const ActivityOne = () => {
  return (
    <StyledActivityOneWrap>
      <ActivityOneTitle />
      <LeftWrap>
        <PhotoUpload />
        <StyledActivityUserData style={{ marginTop: '7px' }}>
          <ContentWrap>
            <DefaultData text="활동 기간" isStar={true} />
            <DateSelector />
          </ContentWrap>
          <ContentWrap>
            <DefaultData text="소속 단체" />
            <Group />
          </ContentWrap>
          <ContentWrap>
            <DefaultData text="관련 직무" isStar={true} />
            <JobTagSelector />
          </ContentWrap>
          <ContentWrap>
            <DefaultData text="핵심 역량" isStar={true} />
            <SkillTagSelector />
          </ContentWrap>
          <ContentWrap>
            <DefaultData text="파일 첨부" />
            <FileUpload />
          </ContentWrap>
          <ContentWrap>
            <DefaultData text="한 줄 설명" />
            <Summary />
          </ContentWrap>
        </StyledActivityUserData>
      </LeftWrap>

      <RightWrap>
        <ActivityOneUserData />
      </RightWrap>
    </StyledActivityOneWrap>
  );
};

const StyledActivityOneWrap = styled.div`
  padding-left: 18.3rem;
  padding-right: 18.3rem;
`;

const StyledActivityUserData = styled.div``;

const ContentWrap = styled.div`
  margin-top: 15px;
`;

const LeftWrap = styled.div`
  float: left;
  width: 35.8rem;
`;

const RightWrap = styled.div`
  float: left;
  width: 53.2rem;
  position: relative;
`;

export default ActivityOne;
