
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleGoStore = () => {
    navigate('/store');
  };

  return (
    <div className="bg-red cursor-pointer" onClick={handleGoStore}>
      <h1 className="text-stone-500 text-2xl font-bold font-['Poppins']">Kyn Analytics</h1>
      <p className="text-stone-500 text-base font-light font-['Poppins']">bookstore</p>
    </div>
  );
};

export default Logo;