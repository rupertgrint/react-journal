import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JournalsContext } from '../../context/JournalsContext';

export default function JournalDetailPage() {
  const { journals } = useContext(JournalsContext);
  const { journalId } = useParams();

  const journal = journals.find((j) => j.id === journalId);

  if (!journal) {
    return <p>Journal not found!!!</p>;
  }
  return (
    <>
      <header>
        <button>back</button>
      </header>
      <section>
        <label>{journal.date}</label>
        <label>{journal.title}</label>
        <p>{journal.content}</p>
      </section>
      <section>
        <button>delete</button>
        <button>edit</button>
      </section>
    </>
  );
}
