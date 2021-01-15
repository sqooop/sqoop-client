import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import filterImg from '../../assets/icons/Filter.svg';
import closeImg from '../../assets/icons/Close.svg';

const { Option } = Select;
const StyledSelect = styled(Select)`
  width: 260px;
  font-size: 32px;
  .ant-select-selector {
    padding-top: 10px !important;
    height: 48px !important;
    border: none !important;
    outline: none !important;
    .ant-select-selection-item {
      font-weight: 700 !important;
    }
  }
`;
const HeaderWrap = styled.div`
  position: relative;
  padding-bottom: 30px;
  .filterImg {
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 15px;
  }
`;

const Header = props => {
  const { handleChange, status, onClick, isOpen } = props;
  const optionStyle = {
    fontSize: '24px',
    paddingTop: '10px',
    height: '48px',
    margin: 'auto 0',
  };
  return (
    <>
      <HeaderWrap>
        <StyledSelect defaultValue="활동 모아보기" onChange={handleChange}>
          <Option style={optionStyle} value="all">
            활동 모아보기
          </Option>
          <Option style={optionStyle} value="like">
            즐겨찾기
          </Option>
          <Option style={optionStyle} value="writing">
            작성 중인 활동
          </Option>
        </StyledSelect>
        {status === 'all' ? (
          !isOpen ? (
            <img
              className="filterImg"
              src={filterImg}
              alt=""
              onClick={onClick}
            />
          ) : (
            <img
              className="filterImg"
              src={closeImg}
              alt=""
              onClick={onClick}
            />
          )
        ) : (
          <></>
        )}
      </HeaderWrap>
    </>
  );
};

export default Header;
