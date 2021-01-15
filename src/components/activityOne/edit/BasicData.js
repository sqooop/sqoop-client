import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PhotoUpload from '../../../containers/activityOne/edit/Image.container';
import EditList from '../global/EditList';
import DateSelector from '../../../containers/activityOne/edit/DateSelector.container';
import Group from '../../../containers/activityOne/edit/Group.container';
import JobTagSelector from '../../../containers/activityOne/edit/JobTagSelector.container';
import SkillTagSelector from '../../../containers/activityOne/edit/SkillTagSelector.container';
import Summary from '../../../containers/activityOne/edit/Summary.container';
import FileUpload from '../../../containers/activityOne/edit/File.container';
import getOneActivity from '../../../lib/api/activityOne/basic';
import {
  setDetailStart,
  setDetailEnd,
  setDetailGroup,
  setDetailSummary,
  setDetailJob,
  setDetailSkill,
  setDetailImage,
  setDetailFile,
  setDetailFilename,
  setDetailState,
} from '../../../store/modules/detail';

const BasicData = () => {
  const dispatch = useDispatch();
  const saveStart = data => dispatch(setDetailStart(data));
  const saveEnd = data => dispatch(setDetailEnd(data));
  const saveGroup = data => dispatch(setDetailGroup(data));
  const saveSummary = data => dispatch(setDetailSummary(data));
  const saveJob = data => dispatch(setDetailJob(data));
  const saveSkill = data => dispatch(setDetailSkill(data));
  const saveImage = data => dispatch(setDetailImage(data));
  const saveFile = data => dispatch(setDetailFile(data));
  const saveState = data => dispatch(setDetailState(data));
  const saveFileName = data => dispatch(setDetailFilename(data));

  const detail = useSelector(state => state.detail);
  // const id = useSelector(state => state.paramsid.id);
  const id = 55;
  useEffect(() => {
    (async () => {
      const BasicData = await getOneActivity(id);
      saveStart(BasicData.selectedActivity.startDate);
      saveEnd(BasicData.selectedActivity.endDate);
      saveGroup(BasicData.selectedActivity.group);
      saveSummary(BasicData.selectedActivity.summary);
      saveJob(BasicData.jobTag);
      saveSkill(BasicData.skillTag);
      saveImage(BasicData.selectedActivity.imageUrl);
      saveFile(BasicData.selectedActivity.fileUrl);
      saveFileName(BasicData.selectedActivity.fileName);
      saveState(BasicData.isFinished);
    })();
  }, [id]);

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
  margin-top: 1.2vw;

  & > div:nth-child(2) {
    margin-top: 0.1vw;
  }
`;

export default BasicData;
