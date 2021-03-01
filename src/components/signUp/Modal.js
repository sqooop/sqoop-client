import React from 'react';
import styled from 'styled-components';
import inputLine from '../../assets/icons/InputLine.svg';

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
  height: 455px;
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
const Question = styled.div`
  font-size: 16px;
`;
const TitleSpan = styled.span`
  display: inline-block;
  font-size: 12px;
  width: 98px;
  text-align: left;
`;
const ContentSpan = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  width: 180px;
  text-align: left;
`;
const ListDiv = styled.div`
  margin-top: 32px;
`;

const Modal = props => {
  const { visible, email, userName, birthday, phone, onClick } = props;
  return (
    <>
      <ModalBackgorundWrap visible={visible}></ModalBackgorundWrap>
      <ModalWrap visible={visible}>
        <ListDiv>
          <TitleSpan>이메일</TitleSpan>
          <ContentSpan>{email}</ContentSpan>
        </ListDiv>
        <ListDiv>
          <TitleSpan>이름</TitleSpan>
          <ContentSpan>{userName}</ContentSpan>
        </ListDiv>
        <ListDiv>
          <TitleSpan>생년월일</TitleSpan>
          <ContentSpan>{birthday}</ContentSpan>
        </ListDiv>
        <ListDiv>
          <TitleSpan>휴대폰 번호</TitleSpan>
          <ContentSpan>{phone}</ContentSpan>
        </ListDiv>
        <img
          style={{ marginTop: '24px', paddingTop: '0px', marginBottom: '24px' }}
          src={inputLine}
          alt=""
          className="line"
        />
        <Question>입력하신 정보가 맞나요?</Question>
        <Question>한번 등록한 계정 정보는 변경할 수 없어요.</Question>
        <Question>다시 한번 꼼꼼히 확인해주세요!</Question>
        <ButtonDiv onClick={onClick}>완료</ButtonDiv>
      </ModalWrap>
    </>
  );
};

export default Modal;
