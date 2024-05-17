import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchAllBooks, searchBooks } from '../../features/books/booksSlice';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = async () => {
    if (searchTerm.trim() !== '') {
      await dispatch(searchBooks(searchTerm));
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      dispatch(fetchAllBooks());
    }
  }, [dispatch, searchTerm]);

  return (
    <div className="flex grow justify-center items-center">
      <input 
        className="bg-white rounded-2xl text-stone-500 text-xs font-bold font-['Poppins'] md:w-96 h-8 px-4 py-6 mx-4" 
        type="text" 
        placeholder="find book"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CustomButton text='Search' styles="bg-red-400 text-stone-50 text-xs font-extrabold" onClickAction={handleSearch} />
    </div>
  )
};

export default SearchInput;