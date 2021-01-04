import React from 'react';
import styled from 'styled-components';

const ModalBackgorundWrap = styled.div`
  /* display: ${props => (props.visible ? 'block' : 'none')};

  background: hsla(0, 0%, 0%, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  z-index: 1000; */
`;

const ModalWrap = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 520px;
  height: 270px;
  z-index: 100000;
  text-align: center;
  background: #ffffff;
  border: 1px solid #000000;
  padding: 60px 60px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const ModalTtile = styled.div`
  font-size: 24px;
  line-height: 30px;
  margin-top: 10px;
  font-weight: 500 !important;
  .title {
    font-weight: 700 !important;
  }
`;

const ModalButton = styled.button`
  font-size: 24px;
  font-weight: 700 !important;
  width: 170px;
  height: 33px;
  border: none;
  outline: none;
  background-color: #ffffff;
`;

const ModalButtonWrap = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 20px;
  width: 100%;
  justify-content: space-between;
`;

const Modal = props => {
  const { visible } = props;
  return (
    <>
      <ModalBackgorundWrap visible={visible}></ModalBackgorundWrap>
      <ModalWrap visible={visible}>
        <ModalTtile>
          <span className="title">기본 정보가 저장되었습니다.</span>
          <br />
          <span style={{ fontSize: '16px', marginTop: '0px' }}>
            활동을 자세히 돌아볼까요?
          </span>
        </ModalTtile>
        <ModalButtonWrap>
          <ModalButton style={{ color: '#a5a5a5' }}>다음에 할래요</ModalButton>
          <ModalButton style={{ color: '#195BFF' }}>네</ModalButton>
        </ModalButtonWrap>
      </ModalWrap>
    </>
  );
};

export default Modal;
