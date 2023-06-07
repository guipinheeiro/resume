import React from 'react';
import './Typography.css'; // Import the CSS you wrote for modular scale

const variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  li: 'li',
  a: 'a'
};

const Typography = ({ variant, children }) => {
  const Tag = variants[variant] || 'p';
  
  return (
    <Tag className={`typography ${variant}`}>
      {children}
    </Tag>
  );
};

export default Typography;
