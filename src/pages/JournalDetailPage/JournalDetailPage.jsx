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
  const journal = journals.find((j) => j.id === journalId);

  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (journal) {
      setTitle(journal.title);
      setContent(journal.content);
      setDate(journal.date);
    }
  }, [journal]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSave = (e) => {
    e.preventDefault();

    const isReadyToSubmit =
      date.trim().length !== 0 &&
      title.trim().length !== 0 &&
      content.trim().length !== 0;

    if (!isReadyToSubmit) return;

    handleEdit({ id: journalId, date, title, content });
    setIsEditMode(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    navigate(`/delete/${journalId}`);
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
        {isEditMode ? (
          <input
            className={styles.dateForm}
            type='date'
            value={date}
            onChange={handleDateChange}
          />
        ) : (
          <label className={styles.date}>{journal.date}</label>
        )}
      </header>
      <div className={styles.container}>
        {isEditMode ? (
          <>
            <input
              className={styles.titleForm}
              type='text'
              value={title}
              onChange={handleTitleChange}
              maxLength='20'
            />
            <textarea
              className={styles.contentForm}
              type='text'
              value={content}
              onChange={handleContentChange}
              maxLength='200'
            />
          </>
        ) : (
          <>
            <label className={styles.title}>{journal.title}</label>
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
