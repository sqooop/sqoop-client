import React from 'react';
import styled from 'styled-components';

const ActivityTemplateBlock = styled.div`
  background: pink;
  right: 9.8rem;
  top: 1rem;
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
