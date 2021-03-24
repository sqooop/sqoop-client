import React from 'react';
import styled from 'styled-components';

const ActivityTemplateBlock = styled.div`
  margin-top: 100px;
  right: 9rem;
  top: 1rem;
  height: 620px;
  position: absolute;
  display: flex;
  width: 600px;
  overflow: auto;
`;

const ActivityTemplate = ({ children }) => {
  return <ActivityTemplateBlock>{children}</ActivityTemplateBlock>;
};

export default ActivityTemplate;
