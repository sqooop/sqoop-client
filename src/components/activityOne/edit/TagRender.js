import { Tag } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const TagRender = props => {
  const { label, closable, onClose } = props;
  // console.log(label);
  return (
    <Tag
      color={'#195BFF'}
      closable={closable}
      onClose={onClose}
      style={{ marginTop: 0 }}
    >
      {label.length > 4 ? `${label.substring(0, 4)}...` : label}
    </Tag>
  );
};

export default TagRender;
