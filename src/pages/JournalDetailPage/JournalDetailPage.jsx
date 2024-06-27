import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';

export default function JournalDetailPage() {
  const navigate = useNavigate();

  const { journals } = useJournals();
  const { journalId } = useParams();

  const journal = journals.find((j) => j.id === journalId);

  const handleDelete = (e) => {
    e.preventDefault();
    navigate(`/delete/${journalId}`);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/edit/${journalId}`);
  };

  if (!journal) {
    return <p>Journal not found!!!</p>;
  }
  return (
    <>
      <header>
        <button onClick={() => navigate(-1)}>back</button>
      </header>
      <section>
        <label>{journal.date}</label>
        <label>{journal.title}</label>
        <p>{journal.content}</p>
      </section>
      <section>
        <button onClick={handleDelete}>delete</button>
        <button onClick={handleEdit}>edit</button>
      </section>
    </>
  );
}
