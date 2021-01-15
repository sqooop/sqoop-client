import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import EditList from '../../../components/activityOne/global/EditList';
import Photo from '../../../components/activityOne/default/Photo';
import getOneActivity from '../../../lib/api/activityOne/basic';
import Clip from '../../../assets/icons/Clip.svg';
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

const BasicDataContainer = () => {
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
  const id = useSelector(state => state.paramsid.id);

  useEffect(() => {
    (async () => {
      console.log('basingData', id);
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
  }, []);

  const { detailJobTag, detailSkillTag } = detail;

  const startyear = detail.detailStart.substring(0, 4);
  const startmonth = detail.detailStart.substring(4, 6);
  const startday = detail.detailStart.substring(6, 8);
  const endyear = detail.detailEnd.substring(0, 4);
  const endmonth = detail.detailEnd.substring(4, 6);
  const endday = detail.detailEnd.substring(6, 8);

  return (
    <StyledBasicData>
      <Photo imageUrl={detail.detailImageUrl} />
      <StyledContentWrap>
        <EditList text="활동 기간" isStar={true} />
        <StyledBasic>
          {startyear}년 {startmonth}월 {startday}일 ~ {endyear}년 {endmonth}월
          {endday}일
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="소속 단체" />
        {detail.detailGroup ? (
          <StyledBasic>{detail.detailGroup}</StyledBasic>
        ) : (
          ''
        )}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="관련 직무" isStar={true} />
        <StyledBasic>
          <StyledTagWrap>
            {detailJobTag ? (
              detailJobTag.map((item, index) => (
                <StyledTag key={index - 1}>{item.content}</StyledTag>
              ))
            ) : (
              <></>
            )}
          </StyledTagWrap>
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="핵심 역량" isStar={true} />
        <StyledBasic>
          <StyledTagWrap>
            {detailSkillTag ? (
              detailSkillTag.map((datalist, index) => (
                <StyledTag key={index - 1}>{datalist.content}</StyledTag>
              ))
            ) : (
              <></>
            )}
          </StyledTagWrap>
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="파일 첨부" />
        <StyledBasic>
          {detail.detailFilename}
          <img src={Clip} alt="" />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="한 줄 설명" />
        <StyledBasic style={{ marginBottom: '3.8vw' }}>
          {detail.detailSummary}
        </StyledBasic>
      </StyledContentWrap>
    </StyledBasicData>
  );
};

const StyledBasicData = styled.div``;

const StyledContentWrap = styled.div`
  display: flex;
  margin-top: 0.8vw;
`;

const StyledBasic = styled.div`
  width: 20.8vw;
  font-size: 1.1vw;
  font-weight: 400;
  line-height: 1.6vw;
  display: flex;
  align-items: center;
  margin-top: 0.48vw;

  img {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledTagWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StyledTag = styled.div`
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  background: #195bff;
  color: white;
  margin-right: 0.6vw;
`;

export default BasicDataContainer;
