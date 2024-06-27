import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJournals } from '../../context/JournalsContext';

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
      <section>
        <p>Are you sure to delete the journal?</p>
      </section>
      <section>
        <button onClick={handleNo}>NO</button>
        <button onClick={handleYes}>YES</button>
      </section>
    </>
  );
}
