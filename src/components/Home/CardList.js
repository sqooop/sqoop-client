import React from 'react';
import styled from 'styled-components';
import CardImg from '../../assets/images/CardImg.svg';

//imgUrl, title, startDate, endDate, hashtag
const CardItem = () => {
  const StartDate = '2020. 10. 03';
  const EndDate = '2021. 10. 10';
  return (
    <CardTemplateBlock>
      <ImageTemplate>
        <img src={CardImg} alt="cardImage"></img>
      </ImageTemplate>
      <TitleTemplate>홍익대 2019 졸업 전시 참여</TitleTemplate>
      <DateTemplate>
        {StartDate}~{EndDate}
      </DateTemplate>
      <HashTagTemplate />
    </CardTemplateBlock>
  );
};
const CardList = () => {
  return (
    <CardListBlock>
      <CardItem />
      <CardItem />
      <CardItem />
    </CardListBlock>
  );
};

const CardTemplateBlock = styled.div`
  align-items: flex-end;
  background: white;
  width: 359px;
  height: 349px;
  margin-left: 150px;
  display: inline;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ImageTemplate = styled.div`
  width: 343px;
  height: 195px;
  background: pink;
  margin: 8px 8px;
`;
const TitleTemplate = styled.div`
  width: 343px;
  height: 38px;
  background: white;
  margin: 8px 8px;
  font-size: 24px;
  font-weight: bold !important;
`;
const DateTemplate = styled.div`
  width: 343px;
  height: 20px;
  background: white;
  margin: 8px 8px;
`;
const HashTagTemplate = styled.div`
  width: 343px;
  height: 55px;
  background: white;
  margin: 8px 8px;
`;
const CardListBlock = styled.div`
  width: 360px;
  margin-left: 180px;
  background: white;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default CardList;
