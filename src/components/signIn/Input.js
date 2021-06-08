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
  display: inline-block;
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
  width: 240px;
  ::placeholder {
    color: #a5a5a5;
  }
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
  const { content, value, onChange, onKeyPress } = props;
  const onMouseDown = event => {
    event.target.parentNode.querySelector('input').type = 'text';
  };
  const onMouseUp = event => {
    event.target.parentNode.querySelector('input').type = 'password';
  };
  return (
    <InputWrap>
      <StyledSpan>
        <label for={content}>{content}</label>
      </StyledSpan>
      {content === '비밀번호' || content === '비밀번호 확인' ? (
        <>
          <StyledInput
            id={content}
            type="password"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
          <ShowPassword onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            보기
          </ShowPassword>
        </>
      ) : (
        <StyledInput
          id={content}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={content === '휴대폰 번호' ? 'ex) 01012345678' : ''}
        />
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
