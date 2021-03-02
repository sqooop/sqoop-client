import React from 'react';
import Styled from 'styled-components';
import CheckBox from '../../../assets/icons/CheckBox.svg';
import CheckedBox from '../../../assets/icons/CheckedBox.svg';

const QuestionBox = Styled.div`
    display: flex;
    margin-bottom: 20px;
    font-size: 14px;
`;

const CheckBoxWrapper = Styled.div`
    display: flex;
    font-size: 14px;
    img {
      cursor: pointer;
    }
`;

const Agreement = Styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 36px;
    color: #195BFF;
    
`;
const Marketing = ({ onClick, marketingCheck }) => {
  return (
    <>
      <QuestionBox>
        등록하신 이메일로 서비스와 관련된 다양한 정보를 보내드려요. <br />
        sqoop과 관련된 업데이트 소식, 이벤트 안내 등을 받아보시겠어요?
      </QuestionBox>
      <CheckBoxWrapper>
        <img
          src={marketingCheck === '' ? CheckBox : CheckedBox}
          alt=""
          onClick={onClick}
        />
        <div className="emailAgree" style={{ marginLeft: '10px' }}>
          이메일 수신 동의
        </div>
      </CheckBoxWrapper>
      <Agreement>{marketingCheck}</Agreement>
    </>
  );
};

export default Marketing;
