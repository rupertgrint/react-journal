import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import styles from './JournalDetailPage.module.css';
import { IoReturnUpBack } from 'react-icons/io5';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

export default function JournalDetailPage() {
  const navigate = useNavigate();

  const { journals, handleEdit } = useJournals();
  const { journalId } = useParams();

  const [isEditMode, setIsEditMode] = useState(false);
  const [journal, setJournal] = useState({ title: '', content: '', date: '' });

  useEffect(() => {
    const foundJournal = journals.find((j) => j.id === journalId);
    if (foundJournal) {
      setJournal(foundJournal);
    } else {
      setJournal(null);
    }
  }, [journalId, journals]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJournal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const { date, title, content } = journal;

    const isReadyToSubmit =
      date.trim().length !== 0 &&
      title.trim().length !== 0 &&
      content.trim().length !== 0;

    if (!isReadyToSubmit) return;

    handleEdit({ id: journalId, ...journal });
    setIsEditMode(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    navigate(`/delete/${journalId}`);
  };

  if (!journal) return <p>Journal Not Found! 🫥</p>;

  return (
    <>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <IoReturnUpBack />
        </button>
        {isEditMode ? (
          <input
            className={styles.dateForm}
            name='date'
            type='date'
            value={journal.date}
            onChange={handleInputChange}
          />
        ) : (
          <span className={styles.date}>{journal.date}</span>
        )}
      </header>
      <div className={styles.container}>
        {isEditMode ? (
          <>
            <input
              className={styles.titleForm}
              name='title'
              type='text'
              value={journal.title}
              onChange={handleInputChange}
              maxLength='20'
            />
            <textarea
              className={styles.contentForm}
              name='content'
              type='text'
              value={journal.content}
              onChange={handleInputChange}
              maxLength='200'
            />
          </>
        ) : (
          <>
            <h1 className={styles.title}>{journal.title}</h1>
            <p className={styles.content}>{journal.content}</p>
          </>
        )}
      </div>
      <section className={styles.footer}>
        {isEditMode ? (
          <button className={styles.saveBtn} type='submit' onClick={handleSave}>
            save
          </button>
        ) : (
          <>
            <button
              className={styles.editBtn}
              onClick={() => setIsEditMode(true)}
            >
              <FiEdit />
            </button>
            <button className={styles.delBtn} onClick={handleDelete}>
              <AiOutlineDelete />
            </button>
          </>
        )}
      </section>
    </>
  );
}
