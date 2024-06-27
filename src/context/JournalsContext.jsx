import React, { createContext, useContext, useState } from 'react';

export const JournalsContext = createContext();

export function JournalsProvider({ children }) {
  const [journals, setJournals] = useState([
    {
      id: '123',
      date: 'Tue.25.6.2024',
      title: '공부',
      content: '오늘은 공부를 했다.',
    },
  ]);
  const handleAdd = (journal) => {
    setJournals([...journals, journal]);
  };
  return (
    <JournalsContext.Provider value={{ journals, handleAdd }}>
      {children}
    </JournalsContext.Provider>
  );
}

export const useJournals = () => useContext(JournalsContext);
