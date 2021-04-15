import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  font-size: 1vw !important;
  border: none;
  outline: none;
  padding: 0px !important;
  width: 18.8vw;
  height: 1.6vw;

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

const GroupWrap = styled.div``;

const Group = props => {
  const { text, onChangeInputs } = props;
  return (
    <GroupWrap>
      <TextInput
        value={text}
        onChange={onChangeInputs}
        placeholder="소속 단체명 입력"
      />
    </GroupWrap>
  );
};

export default Group;
