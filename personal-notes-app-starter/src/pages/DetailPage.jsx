import { useParams } from 'react-router-dom';

export function DetailPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Detail Page</h1>
      <p>{id}</p>
    </>
  )
};
