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
    border: none !important;
    width: 18.8vw;
    height: 1.6vw;
    padding: 0px !important;
    margin-top: 0rem !important;
    font-size: 1.3rem;

    &:hover {
      background-color: #eeeeee !important;
    }
  }

  .ant-select-selection-overflow {
    margin: 0px !important;
    padding: 0px !important;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .ant-select-selection-overflow-item {
    margin: 0px !important;
    padding: 0px !important;
  }

  .ant-select-selection-search {
    /* margin-left: -0.3rem !important; */
  }

  .ant-select-selection-placeholder {
    right: 0rem !important;
    left: 0.8rem !important;
    color: #a5a5a5;
  }

  .ant-select-multiple.ant-select-show-arrow {
    margin: 0px !important;
    padding: 0px !important;
  }

  .ant-tag .ant-tag-has-color {
    font-size: 1.3rem !important;
    padding-left: 1rem !important;
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
        defaultValue={selected}
        mode="multiple"
        showArrow
        tagRender={TagRender}
        style={{
          width: '20.156vw',
          padding: '0rem',
        }}
        placeholder={placeholder}
        onChange={onChange}
        dropdownRender={menu => (
          <div>
            <span
              style={{
                color: '#a5a5a5',
                fontWeight: 400,
                margin: '0.5rem 1rem',
              }}
            >
              태그 생성 (최대 3개 선택)
            </span>
            {menu}
            <Divider />
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                padding: 6,
                height: '3.5rem',
              }}
            >
              <Input
                style={{ flex: 'auto', height: '2.4rem' }}
                value={name}
                onChange={onNameChange}
              />
              <a
                style={{
                  flex: 'none',
                  display: 'block',
                  cursor: 'pointer',
                  paddingLeft: '0.5rem',
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
            style={{ fontSize: '1.3rem' }}
          >
            {item}
          </Option>
        ))}
      </StyledSelect>
    </TagSelectorWrap>
  );
};

export default TagSelector;
