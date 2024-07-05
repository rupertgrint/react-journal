import React, { useMemo } from 'react';
import styles from './JournalList.module.css';
import JournalItem from '../JournalItem/JournalItem';
import { useNavigate } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import { LuPencilLine } from 'react-icons/lu';

export default function JournalList({ selectedDate }) {
  const { year, month } = selectedDate;
  const { journals } = useJournals();

  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/${id}`);
  };
  const handleAdd = () => {
    navigate('/newJournal');
  };

  const sortedJournals = journals
    .filter((j) => {
      const journalDate = new Date(j.date);
      return (
        journalDate.getFullYear() === year &&
        journalDate.getMonth() + 1 === month
      );
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {sortedJournals.map((item) => (
          <JournalItem
            key={item.id}
            journal={item}
            onSelect={() => handleSelect(item.id)}
          />
        ))}
      </ul>
      <button className={styles.button} onClick={handleAdd}>
        <LuPencilLine />
      </button>
    </section>
  );
}
