import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import { fetchAllBooks } from '../../features/books/booksSlice';
import { RootState, AppDispatch } from '../../store';
import { Book } from '../../interfaces/bookInterface';

const Store = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => state.books.books);
  const status = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);


  return (
    <div className="bg-stone-50">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Error: {error || 'Unknown error'}</div>}
        {books.map((book: Book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Store;
