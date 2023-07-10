import React from 'react';
import NotesSearch from './NotesSearch';

export default function NotesHeader({
  search,
  onSearch
}) {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <NotesSearch query={search} onSearch={onSearch} />
    </header>
  );
}
