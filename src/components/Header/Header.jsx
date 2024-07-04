import React from 'react';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';
import { useMemo } from 'react';

export default function Header({
  selectedYear,
  setSelectedYear,
  selectedMonth,
  setSelectedMonth,
}) {
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
  }, []);

  const months = useMemo(() => {
    return Array.from({ length: 12 }, (_, index) => index + 1);
  }, []);

  const handleMonthChange = (e) => setSelectedMonth(Number(e.target.value));
  const handleYearChange = (e) => setSelectedYear(Number(e.target.value));

  return (
    <header className={styles.header}>
      <div className={styles.date}>
        <select
          className={styles.month}
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          className={styles.year}
          value={selectedYear}
          onChange={handleYearChange}
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
