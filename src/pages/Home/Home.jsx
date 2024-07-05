import React from 'react';
import Header from '../../components/Header/Header';
import JournalList from '../../components/JournalList/JournalList';
import { useState } from 'react';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  });

  const updateSelectedDate = (date) => {
    setSelectedDate((prev) => ({ ...prev, ...date }));
  };

  return (
    <>
      <Header
        selectedDate={selectedDate}
        updateSelectedDate={updateSelectedDate}
      />
      <JournalList selectedDate={selectedDate} />
    </>
  );
}
