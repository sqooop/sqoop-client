import React from 'react';
import styled from 'styled-components';

const ActivityTemplateBlock = styled.div`
  background: ivory;
  flex-direction: column;
  justify-content: center;
  right: 90px;
  top: 100px;
  height: 620px;
  position: absolute;
  display: flex;
  width: 550px;
  display: auto;
`;

const ActivityTemplate = ({ children }) => {
  return <ActivityTemplateBlock>{children}</ActivityTemplateBlock>;
};

export default ActivityTemplate;
