import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import EditList from '../global/EditList';
import Photo from './Photo';
import getOneData from '../../../lib/api/activityOne/basic';
import Clip from '../../../assets/icons/Clip.svg';
import {
  setDetailDate,
  setDetailTitle,
  setDetailGroup,
  setDetailSummary,
  setDetailJob,
  setDetailSkill,
  setDetailImage,
  setDetailFile,
} from '../../../store/modules/detail';

const BasicData = () => {
  const dispatch = useDispatch();
  const saveDate = data => dispatch(setDetailDate(data));
  const saveTitle = data => dispatch(setDetailTitle(data));
  const saveGroup = data => dispatch(setDetailGroup(data));
  const saveSummary = data => dispatch(setDetailSummary(data));
  const saveJob = data => dispatch(setDetailJob(data));
  const saveSkill = data => dispatch(setDetailSkill(data));
  const saveImage = data => dispatch(setDetailImage(data));

  const [activity, setActivity] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [job, setJob] = useState('');
  const [competency, setCompetency] = useState('');

  useEffect(() => {
    (async () => {
      const BasicData = await getOneData(49);
      setActivity(BasicData.selectedActivity);
      setStartdate(BasicData.selectedActivity.startDate);
      setEnddate(BasicData.selectedActivity.endDate);
      setJob(BasicData.jobTag);
      setCompetency(BasicData.skillTag);
    })();
  }, []);

  const startyear = startdate.substring(0, 4);
  const startmonth = startdate.substring(4, 6);
  const startday = startdate.substring(6, 8);
  const endyear = enddate.substring(0, 4);
  const endmonth = enddate.substring(4, 6);
  const endday = enddate.substring(6, 8);

  return (
    <StyledBasicData>
      <Photo imageUrl={activity.imageUrl} />
      <StyledContentWrap>
        <EditList text="활동 기간" isStar={true} />
        <StyledBasic>
          {startyear}년 {startmonth}월 {startday}일 ~ {endyear}년 {endmonth}월
          {endday}일
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="소속 단체" />
        {activity.group ? <StyledBasic>{activity.group}</StyledBasic> : ''}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="관련 직무" isStar={true} />
        <StyledBasic>
          <StyledTagWrap>
            {job ? (
              job.map((item, index) => (
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
            {competency ? (
              competency.map((datalist, index) => (
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
          {activity.fileName}
          <img src={Clip} alt="" />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="한 줄 설명" />
        <StyledBasic style={{ marginBottom: '3.8vw' }}>
          {activity.summary}
        </StyledBasic>
      </StyledContentWrap>
    </StyledBasicData>
  );
};

const StyledBasicData = styled.div``;

const StyledContentWrap = styled.div`
  display: flex;
  margin-top: 1.2vw;
`;

const StyledBasic = styled.div`
  width: 20.8vw;
  font-size: 1.1vw;
  font-weight: 400;
  line-height: 1.6vw;
  display: flex;
  align-items: center;
  margin-top: 1.1vw;

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

export default BasicData;
