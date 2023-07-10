import React from 'react';

export default function NotesInput({
  title,
  body
}) {
  return (
    <section className="note-input">
      <h2>Buat catatan</h2>
      <form>
        <p className="note-input__title__char-limit">
          Sisa karakter:
          50
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          value={title}
          required
        />
        <textarea
          type="text"
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini ..."
          value={body}
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </section>
  );
}
