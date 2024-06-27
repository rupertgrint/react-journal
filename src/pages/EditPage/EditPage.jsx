import React from 'react';
import styles from './EditPage.module.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';

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
