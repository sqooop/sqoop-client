import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  background-color: ${props => props.color};
  margin: 0 auto;
  width: 358px;
  color: white;
  cursor: pointer;
<<<<<<< HEAD
=======
  width: 357px;
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
  height: 50px;
  text-align: center;
  padding-top: 13px;
  font-weight: 700;
  margin-bottom: 12px;
`;
const Button = props => {
<<<<<<< HEAD
  const { onClick, color, content } = props;
  return (
    <ButtonDiv
      onClick={color === '#a5a5a5' ? false : onClick}
      color={color}
      disabled="true"
    >
      {content}
=======
  const { onClick, color } = props;
  return (
    <ButtonDiv onClick={onClick} color={color}>
      로그인
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
    </ButtonDiv>
  );
};

export default Button;
