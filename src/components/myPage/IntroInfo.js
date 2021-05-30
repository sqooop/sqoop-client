import React from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const IntroInfoWrap = Styled.div`
  width: 730px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 88px;
  font-size: 14px;

  .title {
    font-weight: bold;
    margin-bottom: 15px;
  }

  .text {
    border: none;
    box-sizing: border-box;
    padding: 14px;
    width: inherit;
    height: 108px;
    resize: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }
  .focusing {
    border: none;
    box-sizing: border-box;
    padding: 14px;
    width: inherit;
    height: 108px;
    resize: none;
    &:focus {
      outline: none;
      background-color: #EEEEEE ;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }
`;

const IntroInfo = ({ introduce, handleChange, match }) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;

  return (
    <IntroInfoWrap>
      <div className="title">자기 소개</div>
      <textarea
        className={isReadOnly ? 'text' : 'focusing'}
        placeholder="입력해주세요"
        readOnly={isReadOnly}
        value={introduce}
        onChange={handleChange}
      />
    </IntroInfoWrap>
  );
};

export default withRouter(IntroInfo);
