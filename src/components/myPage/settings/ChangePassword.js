import React from 'react';
import Styled from 'styled-components';

const CurrentPasswrod = Styled.div`
    display: flex;
    margin-bottom: 20px;
    color: #A5A5A5; 
    input {
        width: 266px;
        border: none;
        outline: none;
        :hover{
            background: #EEEEEE;
        }
    }
    `;

const NewPassword = Styled.div`
    margin-bottom: 20px;
    color: #A5A5A5; 
    input {
        width: 266px;
        border: none;
        outline: none;
        :hover{
            background: #EEEEEE;
        }
    }ackground: #EEEEEE;
    }
    `;
const ConfirmPassword = Styled.div`
    color: #A5A5A5; 
    margin-bottom: 20px;
    input {
        width: 266px;
        border: none;
        outline: none;
        :hover{
            background: #EEEEEE;
        }
    }
`;
const ChangeButton = Styled.div`
    margin-left: 290px;
    color: #A5A5A5; 
    &:hover{
        color: #195BFF;
    }
`;
const ChangePassword = () => {
  return (
    <>
      <CurrentPasswrod>
        <input type="text" placeholder="현재 비밀번호" />
      </CurrentPasswrod>
      <NewPassword>
        <input type="text" placeholder="새 비밀번호" />
      </NewPassword>
      <ConfirmPassword>
        <input tyep="text" placeholder="새 비밀번호 확인" />
      </ConfirmPassword>
      <ChangeButton>
        <button classname="change--password">변경하기</button>
      </ChangeButton>
    </>
  );
};

export default ChangePassword;
