import React from 'react';
import Header from '../../components/Header/Header';
import JournalList from '../../components/JournalList/JournalList';
import { useState } from 'react';

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  return (
    <>
      <Header
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <JournalList selectedYear={selectedYear} selectedMonth={selectedMonth} />
    </>
  );
}
