import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  background-color: ${props => props.color};
  margin: 0 auto;
  width: 358px;
  color: white;
  cursor: pointer;
  height: 50px;
  text-align: center;
  padding-top: 13px;
  font-weight: 700;
  margin-bottom: 12px;
`;
const Button = props => {
  const { onClick, color, content } = props;
  return (
    <ButtonDiv
      onClick={color === '#a5a5a5' ? false : onClick}
      color={color}
      disabled="true"
    >
      {content}
    </ButtonDiv>
  );
};

export default Button;
