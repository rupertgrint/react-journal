import React from 'react';
import styles from './JournalCreateForm.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import { useDarkMode } from '../../context/DarkModeContext';
import { IoReturnUpBack } from 'react-icons/io5';

const initialState = { title: '', content: '', date: '' };

export default function JournalCreatePage() {
  const { darkMode } = useDarkMode();

  const { handleAdd } = useJournals();
  const navigate = useNavigate();

  const [newJournal, setNewJournal] = useState(initialState);

  const handleInputChange = (e) => {
    setNewJournal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isReadyToSubmit =
      newJournal.date.trim().length === 0 &&
      newJournal.title.trim().length === 0 &&
      newJournal.content.trim().length === 0;

    if (!isReadyToSubmit) return;

    handleAdd({ id: uuidv4(), ...newJournal });
    setNewJournal(initialState);
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
            type='date'
            name='date'
            value={newJournal.date}
            onChange={handleInputChange}
          ></input>
        </form>
      </header>
      <section className={styles.container}>
        <label className={styles.label}>Title</label>
        <form onSubmit={handleSubmit}>
          <textarea
            className={styles.titleForm}
            type='text'
            name='title'
            value={newJournal.title}
            onChange={handleInputChange}
            maxlength='20'
          ></textarea>
          <label className={styles.label}>Content</label>
          <textarea
            className={styles.contentForm}
            type='text'
            name='content'
            value={newJournal.content}
            onChange={handleInputChange}
            maxlength='100'
          ></textarea>
        </form>
      </section>
      <section>
        <button className={styles.saveBtn} type='submit' onClick={handleSubmit}>
          save
        </button>
      </section>
    </>
  );
}
