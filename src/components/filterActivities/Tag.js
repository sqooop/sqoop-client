import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.span`
  color: #195bff;
  border: 1px solid #195bff;
  font-size: 13px;
  padding: 1px 10px;
  margin-right: 12px;
  margin-top: 12px;
  display: inline-block;
  cursor: pointer;
`;
const Tag = props => {
  const { name, saveTag, deleteTag } = props;
  const onClick = event => {
    if (event.target.style.color === 'white') {
      deleteTag(event.target.innerText);
      event.target.style.cssText = `
        background-color: white;
        color: #195bff;
    `;
    } else {
      saveTag(event.target.innerText);
      event.target.style.cssText = `
        background-color: #195BFF;
        color: white;
      `;
    }
  };
  return (
    <StyledTag onClick={onClick} value={name}>
      {name}
    </StyledTag>
  );
};

export default Tag;
