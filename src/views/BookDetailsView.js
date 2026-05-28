import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthorById } from 'redux/books/booksOperations';
import { selectAuthor } from 'redux/books/booksSelectors';

export default function BookDetailsView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];
  const [book, setBook] = useState(null);
  const author = useSelector(selectAuthor);

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(bookData => {
      setBook(bookData);
      dispatch(fetchAuthorById(bookData.authorId));
    });
  }, [bookId, dispatch]);
  return (
    <>
      <PageHeading text={`Книга ${slug}`} />

      {book && (
        <>
          <Link to={location?.state?.from?.location ?? '/books'}>
            {location?.state?.from?.label ?? 'Назад'}
          </Link>
          <hr />

          {/* <img src={book.imgUrl} alt={book.title} /> */}
          <h2>{book.title}</h2>
          <p>Автор: {author?.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
