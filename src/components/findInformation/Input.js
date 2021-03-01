import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setPhone, setWarning } from '../../store/modules/findEmail';
import Input from '../../components/signIn/Input';
import Birth from '../../containers/findInformation/Birth.container';
import WarningMessage from '../../components/signUp/WarnMessage';
import styled from 'styled-components';
const Message = styled.div`
  margin-top: 41px;
`;
const InputContainer = () => {
  const dispatch = useDispatch();
  const saveName = data => dispatch(setName(data));
  const savePhone = data => dispatch(setPhone(data));
  const userName = useSelector(state => state.findEmail.userName);
  const saveWarning = data => dispatch(setWarning(data));
  const phone = useSelector(state => state.findEmail.phone);
  const warning = useSelector(state => state.findEmail.warning);

  const onChangePhone = evt => {
    const value = evt.target.value;
    const test = value.search(
      /[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi,
    );
    if (test === -1) {
      savePhone(value);
    }
    saveWarning('');
  };
  const onChangeName = evt => {
    const value = evt.target.value;
    saveName(value);
    saveWarning('');
  };

  return (
    <>
      <Input
        content="이름"
        value={userName}
        onChange={onChangeName}
        defaultValue=""
      />
      <Birth />
      <Input
        content="휴대폰 번호"
        value={phone}
        onChange={onChangePhone}
        defaultValue=""
      />
      <Message>
        <WarningMessage warning={warning} />
      </Message>
    </>
  );
};

export default InputContainer;
