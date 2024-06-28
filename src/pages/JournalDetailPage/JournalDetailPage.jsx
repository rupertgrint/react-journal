import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import styles from './JournalDetailPage.module.css';

export default function JournalDetailPage() {
  const navigate = useNavigate();

  const { journals } = useJournals();
  const { journalId } = useParams();

  const journal = journals.find((j) => j.id === journalId);

  const handleDelete = (e) => {
    e.preventDefault();
    navigate(`/delete/${journalId}`);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/edit/${journalId}`);
  };

  if (!journal) {
    return <p>Journal not found!!!</p>;
  }
  return (
    <>
      <header className={styles.header}>
        <button onClick={() => navigate(-1)}>back</button>
      </header>
      <section className={styles.container}>
        <label>{journal.date}</label>
        <label>{journal.title}</label>
        <p>{journal.content}</p>
      </section>
      <section className={styles.footer}>
        <button className={styles.delBtn} onClick={handleDelete}>
          delete
        </button>
        <button className={styles.editBtn} onClick={handleEdit}>
          edit
        </button>
      </section>
    </>
  );
}
