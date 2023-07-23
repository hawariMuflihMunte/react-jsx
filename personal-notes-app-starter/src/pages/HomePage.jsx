import { ButtonAdd } from '../components/ButtonAdd';
import { NoteItem } from '../components/NoteItem';
import { SearchBar } from '../components/SearchBar';
import { getAllNotes } from '../utils/local-data';

export function HomePage() {
  const notes = getAllNotes().filter((note) => !note.archived);
  const checkFilteredData = notes.length > 0
    ? <section className='notes-list'>
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
    : <section className='notes-list-empty'>
      <p className='notes-list__empty'>Tidak ada catatan</p>
    </section>;

  return (
    <section className='homepage'>
      <h2>Catatan Aktif</h2>
      <SearchBar />
      {checkFilteredData}
      <div className='homepage__action'>
        <ButtonAdd />
      </div>
    </section>
  )
};
