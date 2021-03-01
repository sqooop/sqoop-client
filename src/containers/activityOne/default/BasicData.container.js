import React from 'react';
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

<<<<<<< HEAD
  const fileUrl = detail.detailFileUrl;
  const fileName = detail.detailFilename;

  const onClickFile = () => {
    window.open(`${fileUrl}`, `${fileName}`);
  };

=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
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
            <StyledTag key={index - 1}>{item}</StyledTag>
          ))
        ) : (
          <></>
        )}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="핵심 역량" isStar={true} />
        {detailSkillTag ? (
          detailSkillTag.map((datalist, index) => (
            <StyledTag key={index - 1}>{datalist}</StyledTag>
          ))
        ) : (
          <></>
        )}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="파일 첨부" />
<<<<<<< HEAD
        <a href={`${fileUrl}`} download={`${fileName}`}>
          <StyledBasic
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {detail.detailFilename}
            <img src={Clip} alt="" />
          </StyledBasic>
        </a>
=======
        <StyledBasic
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {detail.detailFilename}
          <img src={Clip} alt="" />
        </StyledBasic>
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="한 줄 설명" />
        <StyledBasic>{detail.detailSummary}</StyledBasic>
      </StyledContentWrap>
    </StyledBasicData>
  );
};

<<<<<<< HEAD
const StyledBasicData = styled.div`
  a {
    color: rgba(0, 0, 0, 0.85);
    text-decoration: none;
  }
`;
=======
const StyledBasicData = styled.div``;
>>>>>>> c701b541a4661ae58261808483f8b9182a287066

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
