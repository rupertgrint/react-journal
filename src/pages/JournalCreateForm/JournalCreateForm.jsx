import React from 'react';
import styles from './JournalCreateForm.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import { useDarkMode } from '../../context/DarkModeContext';
import { IoReturnUpBack } from 'react-icons/io5';

export default function JournalCreatePage() {
  const { darkMode } = useDarkMode();

  const { handleAdd } = useJournals();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length === 0 || content.trim().length === 0) {
      return;
    }
    handleAdd({ id: uuidv4(), date, title, content });
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
          <textarea
            className={styles.titleForm}
            type="text"
            value={title}
            onChange={handleTitleChange}
            maxlength="20"
          ></textarea>
          <label className={styles.label}>Content</label>
          <textarea
            className={styles.contentForm}
            type="text"
            value={content}
            onChange={handleContentChange}
            maxlength="100"
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
