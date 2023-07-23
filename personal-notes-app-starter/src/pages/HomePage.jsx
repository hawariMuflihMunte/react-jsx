import { ButtonAdd } from '../components/ButtonAdd';
import { NoteItem } from '../components/NoteItem';
import { SearchBar } from '../components/SearchBar';
import { getAllNotes } from '../utils/local-data';

export function HomePage() {
  const notes = getAllNotes().filter((note) => note.archived != true);

  return (
    <section className='homepage'>
      <h2>Catatan Aktif</h2>
      <SearchBar />
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
        <ButtonAdd />
      </div>
    </section>
  )
};
