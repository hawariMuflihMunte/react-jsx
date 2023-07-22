export function ArchivesPage() {
  return (
    <section className='archives-page'>
      <h2>Catatan Arsip</h2>
      <section className='search-bar'>
        <input type="text" placeholder='Cari berdasarkan judul ...' />
      </section>
      <section className='notes-list'>
        <article className='note-item'>
          <h3 className='note-item__title'>
            <a href="#">Lorem</a>
          </h3>
          <p className='note-item__createdAt'>Kamis, 14 April 2022</p>
          <p className='note-item__body'>Lorem ipsum dolor sit amet.</p>
        </article>
      </section>
    </section>
  )
};
