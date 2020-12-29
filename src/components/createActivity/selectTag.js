import { Select, Tag, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { React, useState } from 'react';

import 'antd/dist/antd.css';

const tagRender = props => {
  const { label, closable, onClose } = props;
  return (
    <Tag
      color={'#195BFF'}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

const SelectTag = () => {
  const [items, setItems] = useState([{ value: '#동아리' }]);
  const [name, setName] = useState('');
  const onNameChange = event => {
    setName(event.target.value);
  };
  const addItem = () => {
    if (name != null) {
      setItems([...items, { value: `#${name}` }]);
    }
    setName('');
  };
  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      style={{ width: '30%' }}
      options={items}
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

export default SelectTag;
