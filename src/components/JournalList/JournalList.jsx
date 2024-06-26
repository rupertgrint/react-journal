import React from 'react';
import { useState } from 'react';
import styles from './JournalList.module.css';
import JournalItem from '../JournalItem/JournalItem';

export default function JournalList() {
  const [journals, setJournals] = useState([
    {
      id: '123',
      date: 'Tue.25.6.2024',
      title: '공부',
      text: '오늘은 공부를 했다.',
    },
    {
      id: '234',
      date: 'Wed.26.6.2024',
      title: '쉬는 날',
      text: '오늘은 쉬었다.',
    },
  ]);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {journals.map((item) => (
          <JournalItem key={item.id} journal={item} />
        ))}
      </ul>
    </section>
  );
}
