import React from 'react';
import Styled from 'styled-components';
import Checkbox from '../../../assets/icons/Checkbox.svg';

const QuestionBox = Styled.div`
    display: flex;
    margin-bottom: 20px;
    font-size: 14px;
`;

const CheckBoxWrapper = Styled.div`
    display: flex;
    font-size: 14px;
`;

const Agreement = Styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 36px;
    color: #195BFF;
    
`;
const Marketing = () => {
  return (
    <>
      <QuestionBox>
        등록하신 이메일로 서비스와 관련된 다양한 정보를 보내드려요. <br />
        sqoop과 관련된 업데이트 소식, 이벤트 안내 등을 받아보시겠어요?
      </QuestionBox>
      <CheckBoxWrapper>
        <img src={Checkbox} alt="" />
        <div className="emailAgree" style={{ marginLeft: '10px' }}>
          이메일 수신 동의
        </div>
      </CheckBoxWrapper>
      <Agreement>수신 동의 하셨습니다!</Agreement>
    </>
  );
};

export default Marketing;
