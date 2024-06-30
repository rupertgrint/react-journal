import React from 'react';
import styles from './EditPage.module.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import { IoReturnUpBack } from 'react-icons/io5';

export default function EditPage() {
  const { journals, handleEdit } = useJournals();
  const { journalId } = useParams();
  const journal = journals.find((j) => j.id === journalId);

  const navigate = useNavigate();

  const [title, setTitle] = useState(journal.title);
  const [content, setContent] = useState(journal.content);
  const [date, setDate] = useState(journal.date);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || content.trim().length === 0) {
      return;
    }
    handleEdit({ id: journalId, date, title, content });
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <>
      <header className={styles.header}>
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
          <IoReturnUpBack />
        </button>
        <form>
          <input
            className={styles.dateForm}
            type="date"
            value={date}
            onChange={handleDateChange}
          ></input>
        </form>
      </header>
      <section className={styles.container}>
        <label className={styles.label}>Title</label>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.titleForm}
            type="text"
            value={title}
            onChange={handleTitleChange}
            maxLength="20"
          ></input>
          <label className={styles.label}>Content</label>
          <textarea
            className={styles.contentForm}
            type="text"
            value={content}
            onChange={handleContentChange}
            maxLength="200"
          ></textarea>
        </form>
      </section>
      <section>
        <button className={styles.saveBtn} type="submit" onClick={handleSubmit}>
          save
        </button>
      </section>
    </>
  );
}
