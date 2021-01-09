import React from 'react';
import styled from 'styled-components';
import PhotoUpload from './PhotoUpload';
import EditList from '../global/EditList';
import DateSelector from '../../../containers/createActivity/DateSelector.container';
import Group from '../../../containers/createActivity/Group.container';
import JobTagSelector from '../../../containers/common/SkillTagSelector.container';
import SkillTagSelector from '../../../containers/common/SkillTagSelector.container';
import Summary from '../../../containers/createActivity/Summary.container';
import FileUpload from '../../../components/activityOne/edit/FileUpload';

const BasicData = () => {
  return (
    <StyledBasicData>
      <PhotoUpload />
      <StyledContentWrap>
        <EditList text="활동 기간" isStar={true} />
        <DateSelector />
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="소속 단체" />
        <Group />
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="관련 직무" isStar={true} />
        <JobTagSelector />
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="핵심 역량" isStar={true} />
        <SkillTagSelector />
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="파일 첨부" />
        <FileUpload />
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="한 줄 설명" />
        <Summary />
      </StyledContentWrap>
    </StyledBasicData>
  );
};

const StyledBasicData = styled.div``;

const StyledContentWrap = styled.div`
  display: flex;
  margin-top: 15px;
`;

export default BasicData;
