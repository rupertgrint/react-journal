import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';
import styles from './DeletePage.module.css';

export default function DeletePage() {
  const navigate = useNavigate();
  const { handleDelete } = useJournals();
  const { journalId } = useParams();

  const handleNo = () => navigate(-1);
  const handleYes = (e) => {
    e.preventDefault();
    handleDelete(journalId);
    navigate('/');
  };

  return (
    <>
      <section className={styles.container}>
        <p className={styles.text}>Are you sure to delete the journal?</p>
        <section>
          <button className={styles.noBtn} onClick={handleNo}>
            NO
          </button>
          <button className={styles.yesBtn} onClick={handleYes}>
            YES
          </button>
        </section>
      </section>
    </>
  );
}
