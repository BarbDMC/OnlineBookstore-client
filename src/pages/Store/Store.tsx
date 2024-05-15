import { useEffect } from 'react';
import Card from '../../Components/Card/Card';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../store';
import { Book } from '../../interfaces/bookInterface';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../features/books/booksSlice';
import CustomButton from '../../Components/CustomButton/CustomButton';


const Store = () => {
  const { state } = useLocation();
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
      <div className="p-6 flex justify-between">
        <h1 className="text-4xl text-stone-500 font-semibold">Popular</h1>
        <CustomButton text='Add book +' styles="bg-[#E2D6C9] text-stone-500 text-xs font-medium" onClickAction={() => 'HI'} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {status === 'loading' && <div className=''>Loading...</div>}
        {status === 'failed' && <div>Error: {error || 'Unknown error'}</div>}
        {books.map((book: Book) => (
          <Card key={book.id} book={book} userRole={state.role} />
        ))}

        {!books.length && status === 'succeeded' && <div className='text-black'>No books found</div>}
      </div>
    </div>
  );
};

export default Store;
