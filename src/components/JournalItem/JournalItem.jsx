import React from 'react';
import styles from './JournalItem.module.css';

export default function JournalItem({ journal }) {
  return (
    <li className={styles.journal}>
      <p className={styles.date}>{journal.date}</p>
      <p className={styles.title} key={journal.id}>
        {journal.title}
      </p>
      <p className={styles.text}>{journal.text}</p>
    </li>
  );
}
