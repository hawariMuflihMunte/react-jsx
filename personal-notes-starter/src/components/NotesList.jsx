import React from 'react';
import NotesItem from './NotesItem';

export default function NotesList({ data }) {
  return (
    <ul className="notes-list">
      {data.map(note => (
        <NotesItem
          key={note.id}
          {...note}
        />
      ))}
    </ul>
  );
}
