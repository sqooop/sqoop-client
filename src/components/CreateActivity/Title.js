import React from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  font-weight: bold !important;
  border: none;
  outline: none;
  font-size: 32px;
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
    <TitleInput
      value={title}
      onChange={onChangeInputs}
      placeholder="활동 이름"
    />
  );
};

export default Title;
