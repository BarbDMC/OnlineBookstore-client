import CustomButton from "../CustomButton/CustomButton";

const SearchInput = () => {
  return (
    <div className="flex grow justify-center items-center">
      <input 
      className="bg-white rounded-2xl text-stone-500 text-xs font-bold font-['Poppins'] md:w-96 h-8 px-4 py-6 mx-4" 
      type="text" 
      placeholder="find book"
    />
      <CustomButton text='Search' styles="bg-red-400 text-stone-50 text-xs font-extrabold" onClickAction={() => 'HI'} />
    </div>
  )
};


export default SearchInput;