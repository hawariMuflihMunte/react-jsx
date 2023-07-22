import { NoteItem } from '../components/NoteItem';
import { getAllNotes } from '../utils/local-data';
import { Link } from 'react-router-dom';

export function HomePage() {
  const notes = getAllNotes().filter((note) => note.archived != true);

  return (
    <section className='homepage'>
      <h2>Catatan Aktif</h2>
      <section className='search-bar'>
        <input type="text" placeholder='Cari berdasarkan judul ...' />
      </section>
      <section className='notes-list'>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
          />
        ))}
      </section>
      <div className='homepage__action'>
        <button className='action' type='button' title='tambah'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
        </button>
      </div>
    </section>
  )
};
