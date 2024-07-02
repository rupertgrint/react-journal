import React from 'react';
import styles from './JournalList.module.css';
import JournalItem from '../JournalItem/JournalItem';
import { useNavigate } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import { LuPencilLine } from 'react-icons/lu';

export default function JournalList({ selectedYear, selectedMonth }) {
  const { journals } = useJournals();

  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/${id}`);
  };
  const handleAdd = () => {
    navigate('/newJournal');
  };

  const filteredJournals = journals.filter((j) => {
    const journalDate = new Date(j.date);
    return (
      journalDate.getFullYear() === selectedYear &&
      journalDate.getMonth() + 1 === selectedMonth
    );
  });
  const sortedJournals = filteredJournals.toSorted((a, b) =>
    a.date.localeCompare(b.date)
  );

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
