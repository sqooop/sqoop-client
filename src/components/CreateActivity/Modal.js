import React, { useRef } from 'react';
import styled from 'styled-components';
// import { IoMdClose } from 'react-icons/io';

const ModalBackgorundWrap = styled.div`
  background: hsla(0, 0%, 0%, 0.4);
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  z-index: 10000;
`;

const ModalWrap = styled.div`
  z-index: 100000;
  text-align: center;
  background: #ffffff;
  border: 1px solid #000000;
  padding: 5rem 6.2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  /* @media only screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
        padding: 4rem;
    } */
`;

const ModalTtile = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 2.4rem;
`;

const ModalButton = styled.button`
  margin: 0 5px 5px 0;
  width: 12.5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ffffff;
`;

const ModalButtonWrap = styled.div`
  display: flex;
  margin-top: 4rem;
  width: 100%;
  justify-content: space-between;
`;

const ModalComponent = ({ onToggleModal, ...rest }) => {
  return (
    <>
      <ModalBackgorundWrap onClick={onToggleModal}></ModalBackgorundWrap>
      <ModalWrap>
        <ModalTtile>
          기본 정보가 저장되었습니다.
          <br />
          활동을 자세히 돌아볼까요?
        </ModalTtile>
        <ModalButtonWrap>
          <ModalButton>다음에 할래요</ModalButton>
          <ModalButton>네</ModalButton>
        </ModalButtonWrap>
      </ModalWrap>
    </>
  );
};

export default ModalComponent;
