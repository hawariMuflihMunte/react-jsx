import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import { ButtonArchive } from '../components/ButtonArchive';
import { ButtonDelete } from '../components/ButtonDelete';

function DetailPage() {
  const { id } = useParams();
  const {
    title,
    createdAt,
    body
  } = getNote(id);

  return (
    <section className='detail-page'>
      <h2 className='detail-page__title'>{title}</h2>
      <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
      <div className='detail-page__body'>{body}</div>
      <div className='detail-page__action'>
        <ButtonArchive />
        <ButtonDelete />
      </div>
    </section>
  )
}

export { DetailPage };
