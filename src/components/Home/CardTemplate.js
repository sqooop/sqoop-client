import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CardTemplateBlock = styled.div`
  align-items: flex-end;
  background: green;
  width: 359px;
  height: 349px;
  display: flex;
  margin-right: 0px;
`;
const CardTemplate = () => {
  return <CardTemplateBlock></CardTemplateBlock>;
};

export default CardTemplate;
