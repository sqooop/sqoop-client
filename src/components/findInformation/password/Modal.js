import React from 'react';
import styled from 'styled-components';

const ModalBackgorundWrap = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  z-index: 1000;
`;

const ModalWrap = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 52rem;
  height: 379px;
  z-index: 100000;
  text-align: center;
  background: #ffffff;
  border: 0.1rem solid #000000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  padding-top: 12px;
`;
const ButtonDiv = styled.div`
  background-color: #195bff;
  margin: 0 auto;
  width: 358px;
  color: white;
  cursor: pointer;
  height: 50px;
  text-align: center;
  padding-top: 13px;
  font-weight: 700;
  margin-top: 24px;
`;
const StyledDiv = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.color};
`;
const ContentWrap = styled.div`
  margin-top: 63px;
`;
const StyledSmallDiv = styled.div`
  margin-top: 44px;
  margin-bottom: 20px;
`;
const Modal = props => {
  const { visible, onClick, email } = props;
  return (
    <>
      <ModalBackgorundWrap visible={visible}></ModalBackgorundWrap>
      <ModalWrap visible={visible}>
        <ContentWrap>
          <StyledDiv>임시 비밀번호를</StyledDiv>
          <StyledDiv color="#195bff">{email}</StyledDiv>
          <StyledDiv>으로 보내드렸어요</StyledDiv>
        </ContentWrap>
        <StyledSmallDiv>로그인 후 비밀번호를 꼭 변경해주세요!</StyledSmallDiv>
        <ButtonDiv onClick={onClick}>로그인</ButtonDiv>
      </ModalWrap>
    </>
  );
};

export default Modal;
