import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PhotoUpload from './Image.container';
import EditList from '../../../components/activityOne/global/EditList';
import DateSelector from './DateSelector.container';
import Group from './Group.container';
import JobTagSelector from './JobTagSelector.container';
import SkillTagSelector from './SkillTagSelector.container';
import Summary from './Summary.container';
import FileUpload from './File.container';

const BasicDataContainer = () => {
  const detail = useSelector(state => state.detail);

  return (
    <StyledBasicData>
      <PhotoUpload />
      <StyledContentWrap>
        <EditList text="활동 기간" isStar={true} />
        <StyledBasic>
          <DateSelector />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="소속 단체" />
        <StyledBasic>
          <Group value={detail.detailGroup} />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="관련 직무" isStar={true} />
        <StyledBasic>
          <JobTagSelector />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="핵심 역량" isStar={true} />
        <StyledBasic>
          <SkillTagSelector />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="파일 첨부" />
        <StyledBasic>
          <FileUpload />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="한 줄 설명" />
        <StyledBasic>
          <Summary />
        </StyledBasic>
      </StyledContentWrap>
    </StyledBasicData>
  );
};

const StyledBasicData = styled.div`
  width: 27.9688vw;

  margin-bottom: 6.1111vw;

  a {
    color: rgba(0, 0, 0, 0.85);
    text-decoration: none;
  }
`;

const StyledContentWrap = styled.div`
  display: flex;
  margin-top: 0.8vw;
`;

const StyledBasic = styled.div`
  width: 18.8vw;
  font-size: 1.1vw;
  font-weight: 400;
  line-height: 1.6vw;
  display: flex;
  align-items: center;
  margin-top: 0.48vw;
  position: relative;

  img {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    cursor: pointer;
  }
`;

export default BasicDataContainer;
