import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PhotoUpload from '../../../containers/activityOne/edit/Image.container';
import EditList from '../global/EditList';
import DateSelector from '../../../containers/activityOne/edit/DateSelector.container';
import Group from '../../../containers/activityOne/edit/Group.container';
import JobTagSelector from '../../../containers/activityOne/edit/JobTagSelector.container';
import SkillTagSelector from '../../../containers/activityOne/edit/SkillTagSelector.container';
import Summary from '../../../containers/activityOne/edit/Summary.container';
import FileUpload from '../../../containers/activityOne/edit/File.container';

const BasicData = () => {
  const detail = useSelector(state => state.detail);
  return (
    <StyledBasicData>
      <PhotoUpload />
      <StyledContentWrap>
        <EditList text="활동 기간" isStar={true} />
        <DateSelector />
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="소속 단체" />
        <Group value={detail.detailGroup} />
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
  margin-top: 0.8vw;

  & > div:nth-child(2) {
    margin-top: 0.1vw;
  }
`;

export default BasicData;
