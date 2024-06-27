import React, { useContext } from 'react';
import { useState } from 'react';
import styles from './JournalList.module.css';
import JournalItem from '../JournalItem/JournalItem';
import JournalCreatePage from '../../pages/JournalCreateForm/JournalCreateForm';
import { useNavigate } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';

export default function JournalList() {
  const { journals, handleAdd } = useJournals();

  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/${id}`);
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
      <JournalCreatePage onAdd={handleAdd} />
      <button>add</button>
    </section>
  );
}
