import React from 'react';
import { showFormattedDate } from '../utils/index';

export default function NotesItem({
  id,
  title,
  createdAt,
  body,
  archived,
  updateArchive, // prop for updating
  deleteNote // prop for deleting
}) {
  function handleArchive() {
    updateArchive(id);
  }

  function handleDelete() {
    confirm('Hapus catatan ini?')
      ? deleteNote(id)
      : '';
  }

  return (
    <li className="note-item">
        <article className="note-item__content">
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">
            {showFormattedDate(createdAt)}
          </p>
          <p className="note-item__body">
            {body}
          </p>
        </article>
        <section className="note-item__action">
          <button
            className="note-item__delete-button"
            onClick={handleDelete}
          >Delete</button>
          {archived ? (
            <button
              className="note-item__archive-button"
              onClick={handleArchive}
            >
              Move
            </button>
          ) : (
            <button
              className="note-item__archive-button"
              onClick={handleArchive}
            >
              Archive
            </button>
          )
          }
        </section>
    </li>
  );
}
