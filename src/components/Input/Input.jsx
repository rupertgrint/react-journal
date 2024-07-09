import React from 'react';

export default function Input({
  type = 'text',
  className,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
