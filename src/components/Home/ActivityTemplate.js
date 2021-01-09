import React from 'react';
import styled from 'styled-components';

const ActivityTemplateBlock = styled.div`
  right: 90px;
  top: 100px;
  height: 620px;
  position: absolute;
  display: flex;
  width: 550px;
  overflow: auto;
`;

const ActivityTemplate = ({ children }) => {
  return <ActivityTemplateBlock>{children}</ActivityTemplateBlock>;
};

export default ActivityTemplate;
