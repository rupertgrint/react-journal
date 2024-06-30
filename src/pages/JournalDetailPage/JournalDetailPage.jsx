import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import styles from './JournalDetailPage.module.css';
import { IoReturnUpBack } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

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
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <IoReturnUpBack />
        </button>
        <label className={styles.date}>{journal.date}</label>
      </header>
      <section className={styles.container}>
        <label className={styles.title}>{journal.title}</label>
        <p className={styles.content}>{journal.content}</p>
      </section>
      <section className={styles.footer}>
        <button className={styles.editBtn} onClick={handleEdit}>
          <FiEdit />
        </button>
        <button className={styles.delBtn} onClick={handleDelete}>
          <AiOutlineDelete />
        </button>
      </section>
    </>
  );
}
