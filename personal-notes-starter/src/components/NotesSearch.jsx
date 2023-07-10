import React from 'react';

export default function NotesSearch({ query }) {
  return (
    <section className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        value={query}
      />
    </section>
  );
}
