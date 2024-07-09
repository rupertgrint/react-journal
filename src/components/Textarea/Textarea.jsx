import React from 'react';

export default function Textarea({
  className,
  name,
  value,
  onChange,
  ...props
}) {
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
