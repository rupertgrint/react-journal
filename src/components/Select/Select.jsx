import React from 'react';
import styles from './Select.module.css';

export default function Select({ options, className, name, value, onChange }) {
  return (
    <select className={className} name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
