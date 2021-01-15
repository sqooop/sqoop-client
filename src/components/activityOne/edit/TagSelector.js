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
    padding-left: 0.6rem;
    border: none !important;
    width: 20.156vw !important;
    padding-top: 0rem !important;
    margin-top: 0rem !important;
    &:hover {
      background-color: #eeeeee !important;
    }
  }

  .ant-select-selection-search {
    margin-left: -0.3rem !important;
  }

  .ant-select-selection-placeholder {
    right: 0rem !important;
    left: 0.8rem !important;
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
            <Divider style={{ margin: '0.4rem 0' }} />
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
            style={{ fontSize: '1.4rem' }}
          >
            {item}
          </Option>
        ))}
      </StyledSelect>
    </TagSelectorWrap>
  );
};

export default TagSelector;
