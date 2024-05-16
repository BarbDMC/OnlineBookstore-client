import { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import Navbar from '../../Components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../store';
import { Book } from '../../interfaces/bookInterface';
import { addBook } from '../../services/booksServices';
import { useDispatch, useSelector } from 'react-redux';
import BookModal from '../../Components/BookModal/BookModal';
import { fetchAllBooks } from '../../features/books/booksSlice';
import CustomButton from '../../Components/CustomButton/CustomButton';


const Store = () => {
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => state.books.books);
  const user = useSelector((state: RootState) => state.user.user);
  const status = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleSave = async (newBook: Book) => {
    try {
      await addBook(newBook);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="bg-stone-50">
      <Navbar userRole={user?.role} />

      <div className="p-6 flex justify-between">
        <h1 className="text-4xl text-stone-500 font-semibold">Popular</h1>
        {user?.role === 0 && 
          <CustomButton text='Add book +' styles="bg-[#E2D6C9] text-stone-500 text-xs font-medium" onClickAction={handleAdd} />
        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {status === 'loading' && <div className=''>Loading...</div>}
        {status === 'failed' && <div>Error: {error || 'Unknown error'}</div>}

        {books.map((book: Book) => (
          <Card key={book.id} book={book} userRole={user?.role} />
        ))}

        {!books.length && status === 'succeeded' && <div className='text-black'>No books found</div>}
      </div>
      <BookModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
    </div>
  );
};

export default Store;
