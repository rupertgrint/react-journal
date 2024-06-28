import React, { createContext, useContext, useEffect, useState } from 'react';

export const JournalsContext = createContext();

export function JournalsProvider({ children }) {
  const [journals, setJournals] = useState(() =>
    readJournalsFromLocalStorage()
  );
  const handleAdd = (journal) => {
    setJournals([...journals, journal]);
  };
  const handleDelete = (deleted) => {
    setJournals((journals) => journals.filter((j) => j.id !== deleted));
  };
  const handleEdit = (editedJournal) => {
    setJournals((prevJournals) =>
      prevJournals.map((j) => (j.id === editedJournal.id ? editedJournal : j))
    );
  };

  useEffect(() => {
    localStorage.setItem('journals', JSON.stringify(journals));
  }, [journals]);

  return (
    <JournalsContext.Provider
      value={{ journals, handleAdd, handleDelete, handleEdit }}
    >
      {children}
    </JournalsContext.Provider>
  );
}

export const useJournals = () => useContext(JournalsContext);

function readJournalsFromLocalStorage() {
  const journals = localStorage.getItem('journals');
  return journals ? JSON.parse(journals) : [];
}
