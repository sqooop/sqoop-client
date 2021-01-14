import React from 'react';
import styled from 'styled-components';
import noImage from '../../assets/images/noImage.svg';
import HashTag from './HashTag';
const CardItem = props => {
  const { card } = props;
  const startyear = card.startDate.substring(0, 4);
  const startmonth = card.startDate.substring(4, 6);
  const startday = card.startDate.substring(6, 8);
  const endyear = card.endDate.substring(0, 4);
  const endmonth = card.endDate.substring(4, 6);
  const endday = card.endDate.substring(6, 8);
  const jobtags = card.jobTag;
  const skilltags = card.skillTag;
  return (
    <CardTemplateBlock>
      {card.imageUrl ? (
        <ImageTemplate>
          <img
            src={card.imageUrl}
            style={{ width: 'inherit', height: 'inherit' }}
            alt=""
          />
        </ImageTemplate>
      ) : (
        <ImageTemplate>
          <img
            src={noImage}
            style={{ width: 'inherit', height: 'inherit' }}
            alt=""
          />
        </ImageTemplate>
      )}
      <TitleTemplate>{card.title}</TitleTemplate>
      <DateTemplate>
        {startyear}. {startmonth}. {startday} ~ {endyear}. {endmonth}. {endday}
      </DateTemplate>
      <JobTagTemplate>
        {jobtags?.map((data, index) => (
          <HashTag key={index} tag={data}></HashTag>
        ))}
      </JobTagTemplate>
      <SkillTagTemplate>
        {skilltags?.map((data, index) => (
          <HashTag key={index} tag={data}></HashTag>
        ))}
      </SkillTagTemplate>
    </CardTemplateBlock>
  );
};
const CardTemplateBlock = styled.div`
  width: 359px;
  height: 349px;
  display: inline;
  background: pink;
`;
const ImageTemplate = styled.div`
  width: 343px;
  height: 195px;
  margin: 8px 8px;
`;
const TitleTemplate = styled.div`
  // background: skyblue;
  width: 343px;
  height: 38px;
  margin: 4px 8px;
  font-size: 24px;
  font-weight: bold !important;
`;
const DateTemplate = styled.div`
  // background: skyblue;
  width: 343px;
  height: 20px;
  margin: 4px 8px 6px 8px;
  font-weight: normal;
`;
const JobTagTemplate = styled.div`
  // background: skyblue;
  width: 343px;
  height: 28px;
  margin: 8px 8px 6px 8px;
`;
const SkillTagTemplate = styled.div`
  // background: skyblue;
  width: 343px;
  height: 28px;
  margin: 6px 8px 20px 8px;
`;
export default CardItem;
