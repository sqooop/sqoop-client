import React from 'react';
import styled from 'styled-components';

const CardTemplateBlock = styled.div`
  align-items: flex-end;
  background: lightgray;
  width: 359px;
  height: 349px;
  margin-left: 150px;
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
  height: 35px;
  background: yellow;
  margin: 8px 8px;
`;
const DateTemplate = styled.div`
  width: 343px;
  height: 20px;
  background: skyblue;
  margin: 8px 8px;
`;
const HashTagTemplate = styled.div`
  width: 343px;
  height: 58px;
  background: orange;
  margin: 8px 8px;
`;

//imgUrl, title, startDate, endDate, hashtag
const CardTemplate = () => {
  return (
    <CardTemplateBlock>
      <ImageTemplate />
      <TitleTemplate />
      <DateTemplate />
      <HashTagTemplate />
    </CardTemplateBlock>
  );
};

export default CardTemplate;
