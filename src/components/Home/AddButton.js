import React from 'react';
import Styled from 'styled-components';
import SqoopIcon from '../../assets/icons/Sqoop.svg';

const AddButtonWrap = Styled.div`
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
const AddButton = ({
  backgroundColor,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
  border,
}) => {
  return (
    <AddButtonWrap>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          border: border,
        }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {onClick && <img src={SqoopIcon} alt="" />}새 활동 추가
      </button>
    </AddButtonWrap>
  );
};

export default AddButton;
