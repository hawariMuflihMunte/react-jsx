import { showFormattedDate } from '../utils';
import { Link } from 'react-router-dom';

export function NoteItem({
  id,
  title,
  createdAt,
  body
}) {
  return (
    <article className='note-item'>
      <h3 className='note-item__title'>
        <Link to={`/details/${id}`}>{title}</Link>
      </h3>
      <p className='note-item__createdAt'>{showFormattedDate(createdAt)}</p>
      <p className='note-item__body'>{body}</p>
    </article>
  );
}
