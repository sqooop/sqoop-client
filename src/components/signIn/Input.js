import React from 'react';
import styled from 'styled-components';
import inputLine from '../../assets/icons/InputLine.svg';

const ShowPassword = styled.span`
  cursor: pointer;
  font-size: 10px;
  color: #a5a5a5;
  position: absolute;
  right: 2px;
  bottom: 1px;
`;
const StyledSpan = styled.span`
  margin-left: 2px;
  font-size: 12px;
  width: 92px;
  width: 92px;
  display: inline-block;
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
`;
const InputWrap = styled.div`
  margin: 0 auto;
  width: 358px;
  margin-top: 38px;
  position: relative;
  .line {
    position: absolute;
    left: 0px;
    top: 23px;
  }
`;
const Input = props => {
  const { content, value, onChange } = props;
  const onMouseDown = event => {
    event.target.parentNode.querySelector('input').type = 'text';
  };
  const onMouseUp = event => {
    event.target.parentNode.querySelector('input').type = 'password';
  };
  return (
    <InputWrap>
      <StyledSpan>{content}</StyledSpan>
      {content === '비밀번호' || content === '비밀번호 확인' ? (
        <>
          <StyledInput type="password" value={value} onChange={onChange} />
          <ShowPassword onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            보기
          </ShowPassword>
        </>
      ) : (
        <StyledInput type="text" value={value} onChange={onChange} />
      )}
      <img
        style={{ marginTop: '0px', paddingTop: '0px' }}
        src={inputLine}
        alt=""
        className="line"
      />
    </InputWrap>
  );
};
export default Input;
