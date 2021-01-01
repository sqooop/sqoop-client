import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  font-size: 14px;
  border: none;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a5a5a5;
  }
  :-ms-input-placeholder {
    color: #a5a5a5;
  }
`;

const Group = props => {
  const { text, onChangeInputs } = props;
  return (
    <TextInput
      value={text}
      onChange={onChangeInputs}
      placeholder="소속 단체명 입력"
    />
  );
};

export default Group;
