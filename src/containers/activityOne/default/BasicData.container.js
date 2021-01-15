import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import EditList from '../../../components/activityOne/global/EditList';
import Photo from '../../../components/activityOne/default/Photo';
import Clip from '../../../assets/icons/Clip.svg';

const BasicDataContainer = () => {
  const detail = useSelector(state => state.detail);
  const { detailJobTag, detailSkillTag } = detail;
  const startyear = detail.detailStart.substring(0, 4);
  const startmonth = detail.detailStart.substring(5, 7);
  const startday = detail.detailStart.substring(8, 10);
  const endyear = detail.detailEnd.substring(0, 4);
  const endmonth = detail.detailEnd.substring(5, 7);
  const endday = detail.detailEnd.substring(8, 10);

  console.log(detail.detailStart);
  console.log(detail.detailEnd);

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
        {detailJobTag ? (
          detailJobTag.map((item, index) => (
            <StyledTag key={index - 1}>{item.content}</StyledTag>
          ))
        ) : (
          <></>
        )}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="핵심 역량" isStar={true} />
        {detailSkillTag ? (
          detailSkillTag.map((datalist, index) => (
            <StyledTag key={index - 1}>{datalist.content}</StyledTag>
          ))
        ) : (
          <></>
        )}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="파일 첨부" />
        <StyledBasic
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {detail.detailFilename}
          <img src={Clip} alt="" />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="한 줄 설명" />
        <StyledBasic>{detail.detailSummary}</StyledBasic>
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

const StyledTag = styled.span`
  background: #195bff;
  color: white;
  font-size: 13px;
  padding: 1px 10px;
  margin-right: 12px;
  margin-top: 12px;
  display: inline-block;
`;
export default BasicDataContainer;
