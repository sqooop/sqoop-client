import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  margin-bottom: 34px;
`;
const TitleInput = styled.input`
  font-weight: bold !important;
  display: flex;
  border: none;
  outline: none;
  font-size: 32px;
  width: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a5a5a5;
  }
  :-ms-input-placeholder {
    color: #a5a5a5;
  }
`;

const Title = props => {
  const { title, onChangeInputs } = props;
  return (
    <TitleWrap>
      <TitleInput
        value={title}
        onChange={onChangeInputs}
        placeholder="활동 이름"
      />
    </TitleWrap>
  );
};

export default Title;
