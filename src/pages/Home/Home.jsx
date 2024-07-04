import React from 'react';
import Header from '../../components/Header/Header';
import JournalList from '../../components/JournalList/JournalList';
import { useState } from 'react';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  const setYear = (year) => {
    setSelectedDate((prev) => ({ ...prev, year }));
  };
  const setMonth = (month) => {
    setSelectedDate((prev) => ({ ...prev, month }));
  };

  return (
    <>
      <Header
        selectedYear={selectedDate.year}
        setSelectedYear={setYear}
        selectedMonth={selectedDate.month}
        setSelectedMonth={setMonth}
      />
      <JournalList
        selectedYear={selectedDate.year}
        selectedMonth={selectedDate.month}
      />
    </>
  );
}
