import { useState } from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import InputField from '../../Components/InputField/InputField';
import CustomButton from '../../Components/CustomButton/CustomButton';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import ExpiryDateFields from '../../Components/ExpiryDateFields/ExpiryDateFields';
import valid from 'card-validator';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [address, setAddress] = useState('');

  const cart = useSelector((state: RootState) => state.cart);
  const user = useSelector((state: RootState) => state.user.user);
  

  const handleCardNumberChange = (number: string) => {
    const numberValidation = valid.number(number);
    if (numberValidation.isPotentiallyValid) {
      setCardNumber(number);
    }

    if(!numberValidation.isPotentiallyValid) {
      setCardNumber('');
    }
  };


  return (
    <>
      <Navbar userRole={user?.role} />
      <div className='min-h-screen flex items-center justify-center bg-stone-50'>
        <div className="grid grid-cols-2 gap-24">
          <form className='p-6 border border-stone-500 rounded-2xl'>
            <h2 className="text-stone-500 text-2xl font-bold font-['Poppins'] mb-4">Checkout</h2>

            <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@domain.com" />
            <InputField label="Card Number" type="text" value={cardNumber} onChange={(e) => handleCardNumberChange(e.target.value)} placeholder="1234-5678-XXXX-XXXX" />
            <ExpiryDateFields 
              expiryDate={expiryDate}
              setExpiryDate={setExpiryDate}
              cvv={cvv}
              setCvv={setCvv}
            />
            <InputField label="Name on the card" type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Name on the card" maxLength={26} />
            <InputField label="Address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Your address" />

            <CustomButton text='Place Order' styles="bg-red-400 w-full text-white font-semibold px-4 py-2 rounded-lg" />
          </form>

          <OrderSummary items={cart.items} total={cart.total} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
