import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import EditList from '../../../components/activityOne/global/EditList';
import Photo from '../../../components/activityOne/default/Photo';
import Clip from '../../../assets/icons/Clip.svg';

const BasicDataContainer = () => {
  const detail = useSelector(state => state.detail);
  const { detailJobTag, detailSkillTag } = detail;
  const startdate = detail.detailStart;
  const enddate = detail.detailEnd;

  const start = startdate.replace('-', '');
  const end = enddate.replace('-', '');

  const startyear = start.substring(0, 4);
  const startmonth = start.substring(4, 6);
  const startday = start.substring(6, 9);
  const endyear = end.substring(0, 4);
  const endmonth = end.substring(4, 6);
  const endday = end.substring(6, 9);

  const fileUrl = detail.detailFileUrl;
  const fileName = detail.detailFilename;

  const fileArr = fileName.split('.');
  const fileExtension = fileArr[1];

  return (
    <StyledBasicData>
      <Photo imageUrl={detail.detailImageUrl} />
      <StyledContentWrap>
        <EditList text="활동 기간" isStar={true} />
        <StyledBasic>
          {startyear}년 {startmonth}월 {startday}일 ~ {endyear}년 {endmonth}
          월&nbsp;
          {endday}일
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="소속 단체" />
        {detail.detailGroup && detail.detailGroup.length > 14 ? (
          <StyledBasic>{`${detail.detailGroup.substring(
            0,
            14,
          )}...`}</StyledBasic>
        ) : detail.detailGroup && detail.detailGroup.length <= 14 ? (
          <StyledBasic>{detail.detailGroup}</StyledBasic>
        ) : (
          ''
        )}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="관련 직무" isStar={true} />
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '19.9444vw' }}>
          {detailJobTag ? (
            detailJobTag.map((item, index) => (
              <StyledTag key={index - 1}>{item}</StyledTag>
            ))
          ) : (
            <></>
          )}
        </div>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="핵심 역량" isStar={true} />
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '19.9444vw' }}>
          {detailSkillTag ? (
            detailSkillTag.map((datalist, index) => (
              <StyledTag key={index - 1}>{datalist}</StyledTag>
            ))
          ) : (
            <></>
          )}
        </div>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="파일 첨부" />
        {fileUrl ? (
          <a href={`${fileUrl}`} download={`${fileName}`}>
            <StyledBasic
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              {detail.detailFilename.length > 14
                ? `${detail.detailFilename.substring(0, 14)}...${fileExtension}`
                : detail.detailFilename}
              <img src={Clip} alt="" />
            </StyledBasic>
          </a>
        ) : (
          <StyledBasic
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <img src={Clip} alt="" />
          </StyledBasic>
        )}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="한 줄 설명" />
        <StyledBasic>{detail.detailSummary}</StyledBasic>
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
  height: 3rem;
  font-size: 14px;
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

const StyledTag = styled.div`
  background: #195bff;
  color: white;
  font-size: 13px;
  padding: 0.0781vw 0.7813vw;
  margin-right: 0.9375vw;
  margin-top: 0.9375vw;
`;

export default BasicDataContainer;
