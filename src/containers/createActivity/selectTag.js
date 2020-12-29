import { Select, Tag, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { setItems, setName } from '../../store/modules/hashtag';
import { useDispatch, useSelector } from 'react-redux';

import 'antd/dist/antd.css';

const tagRender = props => {
  const { label, closable, onClose } = props;
  return (
    <Tag color={'#195BFF'} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </Tag>
  );
};

const SelectTag = () => {
  const dispatch = useDispatch();
  const saveItems = data => dispatch(setItems(data));
  const saveName = data => dispatch(setName(data));
  const name = useSelector(state => state.hashtags.name);
  const items = useSelector(state => state.hashtags.items);

  const onNameChange = event => {
    saveName(event.target.value);
  };
  const addItem = () => {
    if (name != null) {
      saveItems([...items, { value: `#${name}` }]);
    }
    saveName('');
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
            <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
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
