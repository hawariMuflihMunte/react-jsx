import { NoteItem } from "../components/NoteItem";
import { SearchBar } from "../components/SearchBar";
import { getAllNotes } from "../utils/local-data";

export function ArchivesPage() {
  const notes = getAllNotes().filter((note) => note.archived);
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
    <section className='archives-page'>
      <h2>Catatan Arsip</h2>
      <SearchBar />
      {checkFilteredData}
    </section>
  )
};
