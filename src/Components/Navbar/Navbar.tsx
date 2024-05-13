
import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import CustomButton  from "../CustomButton/CustomButton";

const Navbar = () => {
  return (
    <nav className="py-4 px-4 bg-[E6DBCD] flex justify-between">
       <Logo />
       <SearchInput />
       <CustomButton text='Search' styles='erew' onClickAction={() => 'HI'} />
    </nav>
  );
};

export default Navbar;