import React from 'react';
import styles from './JournalItem.module.css';

export default function JournalItem({ journal, onSelect }) {
  return (
    <li className={styles.journal} key={journal.id} onClick={onSelect}>
      <p className={styles.date}>{journal.date}</p>
      <h3 className={styles.title}>{journal.title}</h3>
      <p className={styles.text}>{journal.text}</p>
    </li>
  );
}
