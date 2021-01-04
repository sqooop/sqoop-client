import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import TagRender from './TagRender';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { Option } = Select;
const TagSelectorWrap = styled.div``;
const StyledSelect = styled(Select)`
  /* 
ant-select-selector : padding-left가 태그랑 입력창 전체
.ant-select-selection-search : margin-left 음수로 해야해
.ant-select-selection-placeholder : 얘는 placeholder, absolute라 padding이나 margin이 아니라 left로 지정
 */
  .ant-select-selector {
    padding-left: 6px;
    border: none !important;
    width: 266px !important;
    /* height: 26px !important; */
    padding-top: 0px !important;
    margin-top: 0px !important;
    &:hover {
      background-color: #eeeeee !important;
    }
  }
  .ant-select-selection-search {
    margin-left: -3px !important;
  }
  .ant-select-selection-placeholder {
    right: 0px !important;
    left: 8px !important;
    color: #a5a5a5;
  }
`;

const TagSelector = props => {
  const {
    name,
    items,
    onNameChange,
    addItem,
    onChange,
    placeholder,
    selected,
  } = props;

  return (
    <TagSelectorWrap>
      <StyledSelect
        suffixIcon=""
        mode="multiple"
        showArrow
        tagRender={TagRender}
        style={{
          width: '266px',
          padding: '0px',
        }}
        placeholder={placeholder}
        onChange={onChange}
        dropdownRender={menu => (
          <div>
            <span
              style={{
                color: '#a5a5a5',
                fontWeight: 400,
                margin: '5px 10px',
              }}
            >
              태그 생성 (최대 3개 선택)
            </span>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                padding: 6,
                height: '35px',
              }}
            >
              <Input
                style={{ flex: 'auto', height: '24px' }}
                value={name}
                onChange={onNameChange}
              />
              <a
                style={{
                  flex: 'none',
                  display: 'block',
                  cursor: 'pointer',
                  paddingLeft: '5px',
                }}
                onClick={addItem}
              >
                <PlusOutlined />
              </a>
            </div>
          </div>
        )}
      >
        {items.map(item => (
          <Option
            key={item}
            disabled={
              selected.length > 2
                ? selected.includes(item)
                  ? false
                  : true
                : false
            }
            style={{ fontSize: '14px' }}
          >
            {item}
          </Option>
        ))}
      </StyledSelect>
    </TagSelectorWrap>
  );
};

export default TagSelector;
