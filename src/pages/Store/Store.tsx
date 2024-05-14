import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Book } from "../../interfaces/bookInterface";

const Store = () => {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  console.log("🚀 ~ Store ~ searchResults:", searchResults)

  const handleSearchResults = (authorBooks: Book[], titleBooks: Book[]) => {
    setSearchResults([...authorBooks, ...titleBooks]);
  };

  return (
    <div className="bg-stone-50">
        <Navbar handleSearchResults={handleSearchResults} />
    </div>
  );
};

export default Store;