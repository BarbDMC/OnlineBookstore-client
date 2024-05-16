
import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";
import CustomButton  from "../CustomButton/CustomButton";

type NavbarProps = {
  userRole: number | undefined;
};

const Navbar = ({ userRole }: NavbarProps) => {
  return (
    <nav className="py-4 px-4 bg-[#E6DBCD] flex justify-between items-center">
       <Logo />
       <SearchInput />
        {userRole === 0 && <CustomButton text='Username' styles="bg-red-400 text-stone-50 text-xs font-extrabold" />}
        {userRole === 1 && <CustomButton text='Cart' styles="bg-red-400 text-stone-50 text-xs font-extrabold" />}
    </nav>
  );
};

export default Navbar;