import { useState } from "react";
import { Book } from "../../interfaces/bookInterface";
import CustomButton from "../CustomButton/CustomButton";
import useSearchByTitle from "../../hooks/useSearchByTitle";
import useSearchByAuthor from "../../hooks/useSearchByAuthor";

interface SearchInputProps {
  handleSearchResults: (authorBooks: Book[], titleBooks: Book[]) => void;
}

const SearchInput = ({ handleSearchResults }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchByTitle } = useSearchByTitle();
  const { searchByAuthor } = useSearchByAuthor();

  const handleSearch = async () => {
    const authorBooks =  await searchByAuthor(searchTerm);
    const titleBooks = await searchByTitle(searchTerm);
    handleSearchResults(authorBooks, titleBooks);
  };

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
