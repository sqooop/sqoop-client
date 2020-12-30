import { Tag } from 'antd';
import React from 'react';

import 'antd/dist/antd.css';

const TagRender = props => {
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

export default TagRender;
