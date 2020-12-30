import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  font-size: 14px;
  border: none;
  outline: none;
`;

const Text = props => {
  const { title, onChangeInputs, placeholder } = props;
  return (
    <TextInput
      value={title}
      onChange={onChangeInputs}
      placeholder={placeholder}
    />
  );
};

export default Text;
