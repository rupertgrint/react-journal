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

  const [newJournal, setNewJournal] = useState({
    title: '',
    content: '',
    date: '',
  });

  const handleInputChange = (e) => {
    setNewJournal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      newJournal.date.trim().length === 0 ||
      newJournal.title.trim().length === 0 ||
      newJournal.content.trim().length === 0
    ) {
      return;
    }
    handleAdd({ id: uuidv4(), ...newJournal });
    setNewJournal({
      date: '',
      title: '',
      content: '',
    });
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
            name="date"
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
            type="text"
            name="title"
            value={newJournal.title}
            onChange={handleInputChange}
            maxlength="20"
          ></textarea>
          <label className={styles.label}>Content</label>
          <textarea
            className={styles.contentForm}
            type="text"
            name="content"
            value={newJournal.content}
            onChange={handleInputChange}
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
