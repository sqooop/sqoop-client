import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  font-size: 14px;
  border: none;
  outline: none;
  width: 266px;
  height: 132px;
  padding-left: 8px;
  padding-top: 5px;
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
