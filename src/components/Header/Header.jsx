import React from 'react';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';
import Select from '../Select/Select';

const months = Array.from({ length: 12 }, (_, index) => index + 1);
const MIN_YEAR = 1990;

export default function Header({ selectedDate, onDateChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const date = new Date();
  const today = date.toLocaleDateString();
  const currentYear = date.getFullYear();

  const years = Array.from(
    { length: currentYear - MIN_YEAR + 1 },
    (_, idx) => idx + MIN_YEAR
  );

  return (
    <header className={styles.header}>
      <div className={styles.date}>
        <Select
          options={months}
          className={styles.month}
          value={selectedDate.month}
          onChange={onDateChange}
          name='month'
        />
        <Select
          options={years}
          className={styles.year}
          value={selectedDate.year}
          onChange={onDateChange}
          name='year'
        />
      </div>
      <p className={styles.today}>{today}</p>
      <button className={styles.button} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
    </header>
  );
}
