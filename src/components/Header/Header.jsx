import React from 'react';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';
import { useMemo } from 'react';

const months = Array.from({ length: 12 }, (_, index) => index + 1);

export default function Header({ selectedDate, updateSelectedDate }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const date = new Date();
  const today = date.toLocaleDateString();
  const currentYear = date.getFullYear();
  const minYear = 1990;

  const years = useMemo(() => {
    const yearsArray = [];
    for (let year = currentYear; year >= minYear; year--) {
      yearsArray.push(year);
    }
    return yearsArray;
  }, [currentYear, minYear]);

  const handleMonthChange = (e) =>
    updateSelectedDate({ month: Number(e.target.value) });
  const handleYearChange = (e) =>
    updateSelectedDate({ year: Number(e.target.value) });

  return (
    <header className={styles.header}>
      <div className={styles.date}>
        <select
          className={styles.month}
          value={selectedDate.month}
          onChange={onDateChange}
          name='month'
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          className={styles.year}
          value={selectedDate.year}
          onChange={onDateChange}
          name='year'
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <p className={styles.today}>{today}</p>
      <button className={styles.button} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
    </header>
  );
}
