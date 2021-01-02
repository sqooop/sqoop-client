import { Select, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import TagRender from './TagRender';
import 'antd/dist/antd.css';

const TagSelector = props => {
  const { name, items, onNameChange, addItem, onChange } = props;
  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={TagRender}
      style={{ width: '30%' }}
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
    ></Select>
  );
};

export default TagSelector;
