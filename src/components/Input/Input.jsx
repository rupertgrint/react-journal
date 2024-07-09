import React from 'react';

export default function Input({
  type = 'text',
  className,
  name,
  value,
  onChange,
  ...props
}) {
  if (type === 'textarea') {
    return (
      <textarea
        className={className}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  }
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
