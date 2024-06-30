import React from 'react';
import styles from './JournalItem.module.css';

const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

export default function JournalItem({ journal, onSelect }) {
  const modifiedDate = new Date(journal.date);
  const dateOfMonth = modifiedDate.getDate();
  const day = weekday[modifiedDate.getDay()];

  return (
    <li className={styles.journal} key={journal.id} onClick={onSelect}>
      <p className={styles.date}>{`${day}, ${dateOfMonth}`}</p>
      <p className={styles.title}>{journal.title}</p>
      <p className={styles.text}>{journal.content}</p>
    </li>
  );
}
