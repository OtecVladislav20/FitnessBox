import { Link } from 'react-router-dom';


export default function Error() {
  return (
    <>
      <h1>Error 404</h1>
      <Link to="/">
        <span>Перейти на главную</span>
      </Link>
    </>
  );
}
