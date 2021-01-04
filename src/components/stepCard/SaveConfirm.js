import React from 'react';
import Styled from 'styled-components';
import { useEffect } from 'react';

const SaveConfirmWrap = Styled.div`
  box-sizing: border-box;
  width: 20vh;
  height: 5.5vh;
  position: relative;
  left: 27.7vh;
  z-index: 2;
  background-color: #00FF84;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  animation-name: popup;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes popup {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const SaveConfirm = ({ setSaved }) => {
  useEffect(() => {
    setTimeout(() => {
      setSaved(false);
    }, 1500);
  });

  return <SaveConfirmWrap>저장 완료!</SaveConfirmWrap>;
};

export default SaveConfirm;
