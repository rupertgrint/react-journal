import React from 'react';

export default function JournalDetailPage({ journal }) {
  return (
    <>
      <header>
        <button>back</button>
        <label>{journal.date}</label>
      </header>
      <section>
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
