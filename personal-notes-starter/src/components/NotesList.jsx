import React from 'react';
import NotesItem from './NotesItem';

export default function NotesList({
  data,
  updateArchive,
  deleteNote
}) {
  return (
    <ul className="notes-list">
      {data.map((note) => (
        <NotesItem
          key={note.id}
          {...note}
          updateArchive={updateArchive}
          deleteNote={deleteNote}
        />
      ))}
    </ul>
  );
}
