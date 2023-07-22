import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

export function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  return (
    <section className='detail-page'>
      <h2 className='detail-page__title'>{note.title}</h2>
      <p className='detail-page__createdAt'>{showFormattedDate(note.createdAt)}</p>
      <div className='detail-page__body'>{note.body}</div>
    </section>
  )
};
