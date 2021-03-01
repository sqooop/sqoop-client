import React, { useState } from 'react';
import styled from 'styled-components';
import { postDeleteAccount } from '../../../lib/api/deleteAccount';
import { ReactComponent as DeleteConfirm } from '../../../assets/icons/DeleteConfirm.svg';

const DeleteData = () => {
  const [reasonData, setReasonData] = useState('');
  const [passwordData, setPasswordData] = useState('');

  const onChangeDelete = e => {
    let name = e.target.name;

    if (name === 'reason') {
      setReasonData(e.target.value);
    } else if (name === 'password') {
      setPasswordData(e.target.value);
    }
  };

  const onClickDelete = async () => {
    try {
      const { data } = await postDeleteAccount({
        reasonData,
        passwordData,
      });
    } catch (e) {
      throw e;
    }
  };

  return (
    <StyledDeleteData>
      <Title style={{ marginTop: '42px' }}>탈퇴 사유</Title>
      <DeleteReason name="reason" onChange={onChangeDelete} />
      <div style={{ display: 'flex' }}>
        <Title>비밀번호</Title>
        <DeletePassword name="password" onChange={onChangeDelete} />
      </div>
      <Button onClick={onClickDelete}>
        <DeleteConfirm />
      </Button>
    </StyledDeleteData>
  );
};

const StyledDeleteData = styled.div`
  margin-left: 14.2969vw;
  margin-right: 14.2969vw;
`;

const Title = styled.div`
  margin-top: 32px;
  margin-left: 7.1875vw;
  font-weight: bold;
  font-size: 14px;
  color: #000000;
`;

const DeleteReason = styled.textarea`
  width: 57.0313vw;
  height: 9.8611vh;
  margin-left: 7.1875vw;
  margin-top: 1.6667vh;
  resize: none;
  border: none;
  outline: none;

  :hover {
    background-color: #eeeeee;
  }
`;

const DeletePassword = styled.textarea`
  width: 20.7813vw;
  height: 3.3333vh;
  margin-left: 3.5156vw;
  margin-top: 32px;
  resize: none;
  border: none;
  outline: none;
  font-weight: normal;
  font-size: 14px;
  overflow: hidden;

  :hover {
    background-color: #eeeeee;
  }
`;

const Button = styled.div`
  position: fixed;
  right: 14.2969vw;
  bottom: 6.6667vh;

  :hover {
    path {
      fill: #195bff;
    }

    border-color: #195bff;
    background-color: white;
  }
`;

export default DeleteData;
