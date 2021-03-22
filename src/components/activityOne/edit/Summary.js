import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  font-size: 1.1vw;
  border: none;
  outline: none;
  width: 18.8vw;
  height: 13.1986vh;
  resize: none;
  padding: 0px !important;

  &:hover {
    background-color: #eeeeee !important;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a5a5a5;
  }
  :-ms-input-placeholder {
    color: #a5a5a5;
  }
`;

const Summary = props => {
  const { text, onChangeInputs } = props;
  return (
    <TextArea
      value={text}
      onChange={onChangeInputs}
      placeholder="활동 내용 요약 입력 (50자 이내)"
    />
  );
};

export default Summary;
