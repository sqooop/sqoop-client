import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getUserName } from '../../../lib/api/home/userAPI';
import {
  getCheckPassword,
  postDeleteAccount,
} from '../../../lib/api/deleteAccount';
import { ReactComponent as DeleteConfirm } from '../../../assets/icons/DeleteConfirm.svg';

const DeleteData = ({ history }) => {
  const [userName, setUserName] = useState('');
  const [reasonData, setReasonData] = useState('');
  const [passwordData, setPasswordData] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitModal, setSubmitModal] = useState('False');

  // console.log(history);

  useEffect(() => {
    (async () => {
      const name = await getUserName();
      setUserName(name);
    })();
  }, [userName]);

  const onChangeDelete = e => {
    let name = e.target.name;

    if (name === 'reason') {
      setReasonData(e.target.value);
    } else if (name === 'password') {
      setPasswordData(e.target.value);
    }
  };

  const onClickCheck = async () => {
    try {
      const { data } = await getCheckPassword({
        passwordData,
      });
      setPasswordError('');

      if (submitModal === 'False') {
        setSubmitModal('True');
      } else {
        setSubmitModal('False');
      }
    } catch (e) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      throw e;
    }
  };

  const onClickDelete = async () => {
    try {
      const { data } = await postDeleteAccount({
        reasonData,
        passwordData,
      });

      window.sessionStorage.clear();
      window.location.reload();
    } catch (e) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      throw e;
    }
  };

  return (
    <StyledDeleteData>
      <Title style={{ marginTop: '42px' }}>탈퇴 사유</Title>
      <DeleteReason
        name="reason"
        onChange={onChangeDelete}
        placeholder={`${userName}님이 sqoop을 떠나시는 이유가 궁금해요. 저희 서비스에 부족한 점이 있어서 떠나시는 거라면, 꼭 알려주세요!
서비스 발전에 큰 도움이 됩니다.`}
      />
      <div style={{ display: 'flex' }}>
        <Title>비밀번호</Title>
        <div style={{ marginLeft: '3.5156vw' }}>
          <DeletePassword
            type="password"
            name="password"
            onChange={onChangeDelete}
            placeholder="비밀번호를 입력해주세요."
          />
          <Error>{passwordError}</Error>
        </div>
      </div>
      <Button onClick={onClickCheck}>
        <DeleteConfirm />
      </Button>
      <>
        <ModalBackgorundWrap visible={submitModal} />
        <ModalWrap visible={submitModal}>
          <ModalTitle>
            <p id="title">계정을 정말 삭제하시겠어요?</p>
            <p style={{ marginTop: '1.2rem' }}>
              계정을 삭제하면 {userName}님의 활동 정보, 프로필, 이력 사항 등
              <br></br>모든 활동 정보가 삭제됩니다.<br></br>삭제된 정보는 복원이
              불가능합니다.
            </p>
          </ModalTitle>
          <ModalButtonWrap>
            <Link to="/">
              <ModalButton style={{ color: '#a5a5a5' }} onClick={onClickDelete}>
                확인
              </ModalButton>
            </Link>
            <ModalButton style={{ color: '#195BFF' }} onClick={onClickCheck}>
              취소
            </ModalButton>
          </ModalButtonWrap>
        </ModalWrap>
      </>
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
  font-weight: normal;
  font-size: 14px;

  :hover {
    background-color: #eeeeee;
  }
`;

const DeletePassword = styled.input`
  width: 20.7813vw;
  height: 3.3333vh;
  margin-top: 32px;
  resize: none;
  border: 0;
  outline: none;
  font-weight: normal;
  font-size: 14px;
  overflow: hidden;
  font-weight: normal;
  font-size: 14px;

  :hover {
    background-color: #eeeeee;
  }
`;

const Error = styled.div`
  font-weight: normal;
  font-size: 10px;
  color: #ff1919;
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

const ModalBackgorundWrap = styled.div`
  display: ${props => (props.visible === 'True' ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  z-index: 100;
`;

const ModalWrap = styled.div`
  display: ${props => (props.visible === 'True' ? 'block' : 'none')};
  width: 52rem;
  height: 33.9rem;
  z-index: 1000;
  text-align: center;
  background: #ffffff;
  border: 0.1rem solid #000000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const ModalTitle = styled.div`
  font-size: 1.6rem;
  margin-top: 6.4rem;
  font-weight: 500 !important;

  #title {
    font-size: 2.4rem;
    font-weight: 700 !important;
  }
`;

const ModalButtonWrap = styled.div`
  display: flex;
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;
  width: 52rem;
  justify-content: space-around;
`;

const ModalButton = styled.button`
  font-size: 2.4rem;
  font-weight: 700 !important;
  border: none;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;
`;

export default DeleteData;
