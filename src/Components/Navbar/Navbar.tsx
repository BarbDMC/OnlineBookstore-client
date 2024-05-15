
import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import CustomButton  from "../CustomButton/CustomButton";

const Navbar = () => {
  return (
    <nav className="py-4 px-4 bg-[#E6DBCD] flex justify-between items-center">
       <Logo />
       <SearchInput />
        <CustomButton text='Username' styles="bg-red-400 text-stone-50 text-xs font-extrabold" onClickAction={() => 'HI'} />
    </nav>
  );
};

export default Navbar;