import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import TagRender from './TagRender';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const TagSelectorWrap = styled.div`
  margin-top: 4px;
`;
const StyledSelect = styled(Select)`
  .ant-select-selector {
    border: none !important;
  }
  .ant-select-selection-placeholder {
    color: #a5a5a5;
  }
`;

const TagSelector = props => {
  const { name, items, onNameChange, addItem, onChange, placeholder } = props;
  return (
    <TagSelectorWrap>
      <StyledSelect
        className="custom"
        mode="multiple"
        showArrow
        tagRender={TagRender}
        style={{
          width: '256px',
          '.antSelectSelector': {
            border: 'none',
            paddingLeft: '10px',
          },
        }}
        placeholder={placeholder}
        options={items}
        onChange={onChange}
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
              <Input
                style={{ flex: 'auto' }}
                value={name}
                onChange={onNameChange}
              />
              <a
                style={{
                  flex: 'none',
                  padding: '8px',
                  display: 'block',
                  cursor: 'pointer',
                }}
                onClick={addItem}
              >
                <PlusOutlined />
              </a>
            </div>
          </div>
        )}
      ></StyledSelect>
    </TagSelectorWrap>
  );
};

export default TagSelector;
