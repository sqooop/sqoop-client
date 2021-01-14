import React from 'react';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';
import Edit from '../../assets/icons/Edit.svg';

const MyPageHeaderWrap = Styled.div`
  display: flex;
  flex-direction: row;
  width: 928px;
  margin: 40px auto;
  justify-content: center;
  align-items: center;

  button {
    width: 86px;
    padding: 0;
    margin: 0;
    background: none;
    font-size: 20px;
    font-weight: bold;
    border: none;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .button {
    &--basic {
      margin-right: 20px;
      color: black;
    }
    &--career {
      color: #AAAAAA;
    }
    &--edit {
      width: 24px;
      height: 24px;
    }
}

.empty {
  flex: 1;
}
`;

const MyPageHeader = ({ history, match }) => {
  return (
    <MyPageHeaderWrap>
      <button
        className="button--basic"
        onClick={() => history.push('/mypage/basic')}
      >
        기본 정보
      </button>
      <button
        className="button--career"
        onClick={() => history.push('/mypage/career')}
      >
        이력 사항
      </button>
      <div className="empty" />
      <img className="button--edit" src={Edit} alt="" />
    </MyPageHeaderWrap>
  );
};

export default withRouter(MyPageHeader);
