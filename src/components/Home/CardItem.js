import React from 'react';
import styled from 'styled-components';
import CardImg from '../../assets/images/CardImg.svg';

//imgUrl, title, startDate, endDate, hashtag
const CardItem = ({ match }) => {
  const CardData = {
    imgUrl: CardImg,
    title: '홍익대 2019 졸업 전시 참여',
    startDate: '2020. 10. 03',
    endDate: '2021. 10. 10',
  };
  return (
    <CardTemplateBlock>
      <ImageTemplate>
        <img src={CardData.imgUrl} alt="cardImage"></img>
      </ImageTemplate>
      <TitleTemplate>{CardData.title}</TitleTemplate>
      <DateTemplate>
        {CardData.startDate}~{CardData.endDate}
        {/*new Date().toLocateDateString()*/}
      </DateTemplate>
      <HashTagTemplate />
    </CardTemplateBlock>
  );
};
const CardTemplateBlock = styled.div`
  background: white;
  width: 359px;
  height: 349px;
  display: inline;
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

export default CardItem;
