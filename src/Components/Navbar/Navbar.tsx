
import Logo from "../Logo/Logo";
import { Book } from "../../interfaces/bookInterface";
import SearchInput from "../SearchInput/SearchInput";
import CustomButton  from "../CustomButton/CustomButton";

interface NavbarProps {
  handleSearchResults: (authorBooks: Book[], titleBooks: Book[]) => void;
}

const Navbar = ({ handleSearchResults }: NavbarProps) => {
  return (
    <nav className="py-4 px-4 bg-[#E6DBCD] flex justify-between items-center">
       <Logo />
       <SearchInput handleSearchResults={handleSearchResults} />
        <CustomButton text='Username' styles="bg-red-400 text-stone-50 text-xs font-extrabold" onClickAction={() => 'HI'} />
    </nav>
  );
};

export default Navbar;