import React from 'react';
import Styled from 'styled-components';
import SaveIcon from '../../assets/icons/SaveIcon.svg';
import SaveIconBlue from '../../assets/icons/SaveIconBlue.svg';
const AddButtonWrap = Styled.div`
  margin-left: 90px;
  margin-top: 400px;
  width: 200px;
  button {
    outline: none;
    border: none;
    background: #195BFF;
    width: 170px;
    height: 50px;
    color: white;
    font-size: 17px;
    font-weight: 700;
    display: center;
    align-items: center;
    padding-right: 0rem;
    cursor: pointer;
    &:hover{
      background: #A5A5A5;

    }
  }

  img {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-right: 4px;
  } 
`;
const AddButton = () => {
  return (
    <AddButtonWrap>
      <div className="button">
        <button type="submit">
          새 활동 추가{<img src={SqoopIcon} alt="" />}
        </button>
      </div>
    </AddButtonWrap>
  );
};

export default AddButton;
