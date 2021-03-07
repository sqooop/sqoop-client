import React from 'react';
import Styled from 'styled-components';
import { deleteActivity } from '../../../lib/api/activity';
import { withRouter } from 'react-router-dom';

const DeleteModalWrap = Styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 98;
  position: absolute;
  top: 0; left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;

  .modal {
    border: 1px solid black;
    position: relative;
    box-sizing: border-box;
    background-color: white;
    z-index: 99;
    width: 520px;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-name: coming-down;
    animation-duration: 1s;

    &--title {
      font-size: 24px;
      font-weight: bold;
      margin-top: 64px;
      margin-bottom: 0;
    }

    &--description {
      font-size: 16px;
      font-weight: normal;
      margin-bottom: 65px;
    }

    &--button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

  .yes {
    color: #A5A5A5;
    font-weight: bold;
    font-size: 24px;
    border: none;
    background: none;
    margin-right: 150px;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .no {
    color: #195BFF;
    font-weight: bold;
    font-size: 24px;
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  @keyframes coming-down {
    from {
      top: -50px;
      opacity: 0.3;
    } to {
      top: 0px;
      opacity: 1;
    }
  }

`;

const DeleteModal = ({ id, saveVisible, history }) => {
  return (
    <DeleteModalWrap>
      <div className="modal">
        <p className="modal--title">정말 삭제하시겠습니까?</p>
        <p className="modal--description">
          한 번 삭제한 자료는 복구할 수 없습니다.
        </p>
        <div className="modal--button">
          <button
            className="yes"
            onClick={async () => {
              await deleteActivity(id);
              history.goBack();
              saveVisible(false);
            }}
          >
            확인
          </button>
          <button
            className="no"
            onClick={async () => {
              saveVisible(false);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </DeleteModalWrap>
  );
};

export default withRouter(DeleteModal);
