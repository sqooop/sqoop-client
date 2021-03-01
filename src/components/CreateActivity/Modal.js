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
  height: 27rem;
  z-index: 100000;
  text-align: center;
  background: #ffffff;
  border: 0.1rem solid #000000;
  padding: 6rem 6rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const ModalTtile = styled.div`
  font-size: 2.4rem;
  line-height: 3rem;
  margin-top: 1rem;
  font-weight: 500 !important;
  .title {
    font-weight: 700 !important;
  }
`;

const ModalButton = styled.button`
  font-size: 2.4rem;
  font-weight: 700 !important;
  width: 17rem;
  height: 3.3rem;
  border: none;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;
`;

const ModalButtonWrap = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-left: 2rem;
  width: 100%;
  justify-content: space-between;
`;

const Modal = props => {
  const { visible, nextTime, goCard } = props;
  return (
    <>
      <ModalBackgorundWrap visible={visible}></ModalBackgorundWrap>
      <ModalWrap visible={visible}>
        <ModalTtile>
          <span className="title">기본 정보가 저장되었습니다.</span>
          <br />
          <span style={{ fontSize: '1.6rem', marginTop: '0rem' }}>
            활동을 자세히 돌아볼까요?
          </span>
        </ModalTtile>
        <ModalButtonWrap>
          <ModalButton style={{ color: '#a5a5a5' }} onClick={nextTime}>
            다음에 할래요
          </ModalButton>
          <ModalButton style={{ color: '#195BFF' }} onClick={goCard}>
            네
          </ModalButton>
        </ModalButtonWrap>
      </ModalWrap>
    </>
  );
};

export default Modal;
