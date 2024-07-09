import React from 'react';
import styles from './JournalCreateForm.module.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import { IoReturnUpBack } from 'react-icons/io5';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';

const initialState = {
  title: '',
  content: '',
  date: '',
};

export default function JournalCreatePage() {
  const { handleAdd } = useJournals();
  const navigate = useNavigate();

  const [newJournal, setNewJournal] = useState(initialState);

  useEffect(() => {
    setNewJournal((prev) => ({
      ...prev,
      date: new Date().toISOString().substring(0, 10),
    }));
  }, []);

  const handleInputChange = (e) => {
    setNewJournal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isReadyToSubmit =
      newJournal.date.trim().length !== 0 &&
      newJournal.title.trim().length !== 0 &&
      newJournal.content.trim().length !== 0;

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
        <Input
          className={styles.dateForm}
          type='date'
          name='date'
          value={newJournal.date}
          onChange={handleInputChange}
        />
      </header>
      <section className={styles.container}>
        <label className={styles.label}>Title</label>
        <form onSubmit={handleSubmit}>
          <Input
            className={styles.titleForm}
            type='text'
            name='title'
            value={newJournal.title}
            onChange={handleInputChange}
            maxLength='20'
          />
          <label className={styles.label}>Content</label>
          <Textarea
            className={styles.contentForm}
            name='content'
            value={newJournal.content}
            onChange={handleInputChange}
            maxLength='200'
          />
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
