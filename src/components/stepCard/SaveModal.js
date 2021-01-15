import React from 'react';
import Styled from 'styled-components';

const SaveModalWrap = Styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 98;
  position: absolute;
  top: 0; left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    position: relative;
    box-sizing: border-box;
    background-color: white;
    z-index: 99;
    width: 520px;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    padding-top: 69px;
    padding-bottom: 65px;
    animation-name: coming-down;
    animation-duration: 1s;

    & > button {
      color: #195BFF;
      font-weight: bold;
      border: none;
      background-color: white;
      cursor: pointer;
      &:focus {
        outline: none;
      }
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

const SaveModal = ({ setModalActive }) => {
  return (
    <SaveModalWrap>
      <div className="modal">
        <p>스쿱을 저장한 후, 이동해 주세요!</p>
        <button
          onClick={() => {
            setModalActive(false);
          }}
        >
          확인
        </button>
      </div>
    </SaveModalWrap>
  );
};

export default SaveModal;
