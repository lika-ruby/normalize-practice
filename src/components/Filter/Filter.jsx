import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/books/booksReducer.js';
import { selectFilter } from '../../redux/books/booksSelectors.js';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Пошук книг..."
      value={value}
      onChange={handleChange}
    />
  );
}
