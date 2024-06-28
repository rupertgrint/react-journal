import React from 'react';
import styles from './Header.module.css';
import { useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const date = new Date();
  const today = date.toLocaleDateString();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const minYear = 1990;

  const years = [];
  for (let year = currentYear; year >= minYear; year--) {
    years.push(year);
  }

  const [chosenYear, setChosenYear] = useState(currentYear);
  const [chosenMonth, setChosenMonth] = useState(currentMonth);

  const handleMonthChange = (e) => setChosenMonth(e.target.valule);
  const handleYearChange = (e) => setChosenYear(e.target.value);

  return (
    <header className={styles.header}>
      <div className={styles.date}>
        <select
          className={styles.month}
          value={chosenMonth}
          onChange={handleMonthChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select
          className={styles.year}
          value={chosenYear}
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
