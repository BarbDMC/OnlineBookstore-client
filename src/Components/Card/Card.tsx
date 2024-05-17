import { useState } from "react";
import BookModal from "../BookModal/BookModal";
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { updateBook, deleteBook } from "../../services/booksServices";
import { Book } from "../../interfaces/bookInterface";
import { setBooks } from "../../features/books/booksSlice";

type CardProps = {
  book: Book;
  userRole: number | undefined;
};

const Card = ({ book, userRole } : CardProps) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const books = useSelector((state: RootState) => state.books.books);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleAddToCart = (book: Book) => {
    if (book.id !== undefined) {
      const cartItem = {
        id: book.id,
        name: book.title,
        price: book.price,
        quantity: 1,
      };

      dispatch(addToCart(cartItem));
    }
  };

  const handleSave = async (updatedBook: Book) => {
    try {
      const response = await updateBook(updatedBook);
      const updatedBooks = books.map((book) => book.id === response.book.id ? response.book : book);
      dispatch(setBooks(updatedBooks));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteBook(id);
      const updatedBooks = books.filter((book) => book.id !== id);
      dispatch(setBooks(updatedBooks));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div key={book.id} className="bg-transparent border-2 border-[#E6DBCD] shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="h-48 w-32 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-gray-500">by {book.author}</p>
          <p className="text-gray-500">${book.price}</p>
        </div>
      </div>
      {
        userRole === 1 && 
        <button className="bg-red-400 text-white font-semibold px-4 py-2 rounded-lg self-end" onClick={() => handleAddToCart(book)}>
          Add to Cart
        </button>
      }
      {
        userRole == 0 && 
        <div className="flex justify-end">
          <button className="bg-lime-600 text-white font-semibold mx-4 px-4 py-2 rounded-lg" onClick={handleEdit}>Edit</button>
          <button className="bg-red-400 text-white font-semibold px-4 py-2 rounded-lg" onClick={() => handleDelete(book.id as number)}>Delete</button>
          <BookModal book={book} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
        </div>
      }
    </div>
  );
};


export default Card;