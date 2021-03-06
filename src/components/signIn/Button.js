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
    <>
      {color === '#a5a5a5' ? (
        <ButtonDiv color={color}>{content}</ButtonDiv>
      ) : (
        <ButtonDiv onClick={onClick} color={color}>
          {content}
        </ButtonDiv>
      )}
    </>
  );
};

export default Button;
