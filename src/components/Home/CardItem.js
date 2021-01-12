import React from 'react';
import styled from 'styled-components';
import noImage from '../../assets/images/noImage.svg';

const CardItem = props => {
  const { card } = props;
  /*   const year = useSelector(state => state.home.year);
  const month = useSelector(state => state.home.month); */
  console.log('id', card);
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
      {/*      <Img>
          <img
            src={card.imageUrl}
            style={({ width: '343px' }, { height: '195px' })}
            alt=""
          ></img>
        </Img> */}
      <TitleTemplate>{card.title}</TitleTemplate>
      <DateTemplate>
        {card.startDate}~{card.endDate}
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
