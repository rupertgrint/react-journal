import React from 'react';
import styles from './JournalList.module.css';
import JournalItem from '../JournalItem/JournalItem';
import { useNavigate } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';

export default function JournalList() {
  const { journals } = useJournals();

  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/${id}`);
  };
  const handleAdd = () => {
    navigate('/newJournal');
  };

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {journals.map((item) => (
          <JournalItem
            key={item.id}
            journal={item}
            onSelect={() => handleSelect(item.id)}
          />
        ))}
      </ul>
      <button onClick={handleAdd}>add</button>
    </section>
  );
}
