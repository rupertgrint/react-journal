import React from 'react';
import styles from './JournalCreateForm.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';

export default function JournalCreatePage() {
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
        <button className={styles.backBtn}>back</button>
        <form>
          <input type="date" value={date} onChange={handleDateChange}></input>
        </form>
      </header>
      <section>
        <label>Title</label>
        <form className={styles.titleForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            maxlength="20"
          ></input>
        </form>
        <label>Content</label>
        <form className={styles.contentForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={content}
            onChange={handleContentChange}
            maxlength="200"
          ></input>
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
