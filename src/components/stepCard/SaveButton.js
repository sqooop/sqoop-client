import React from 'react';
import Styled from 'styled-components';
import SaveIcon from '../../assets/icons/SaveIcon.svg';

const SaveButtonWrap = Styled.div`
  button {
    box-sizing: border-box;
    width: 144px;
    height: 40px;
    margin-right: 12px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    float: right;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:focus {
      outline: none;
    }
  }

  img {
    width: 24px;
    height: 24px;
    margin-left: 14px;
    margin-right: 4px;
  }
`;

const SaveButton = ({
  color = '#A5A5A5',
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <SaveButtonWrap>
      <button
        style={{ backgroundColor: color }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img src={SaveIcon} alt="" />
        스쿱 저장
      </button>
    </SaveButtonWrap>
  );
};

export default SaveButton;
