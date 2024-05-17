interface ExpiryDateFieldsProps {
  expiryDate: string;
  setExpiryDate: (expiryMonth: string) => void;
  cvv: string;
  setCvv: (cvv: string) => void;
}



const ExpiryDateFields = ({ expiryDate, setExpiryDate, cvv, setCvv }: ExpiryDateFieldsProps) => {
  const handleCvvChange = (cvv: string) => {
    if (cvv.length <= 3) {
      setCvv(cvv);
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <input
        type="month"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        className="bg-stone-50 border border-stone-500 text-stone-500 sm:text-sm rounded-lg w-full p-2.5"
      />
      <input
        type="number"
        value={cvv}
        onChange={(e) => handleCvvChange(e.target.value)}
        placeholder="CVV"
        maxLength={3}
        className="bg-stone-50 border border-stone-500 text-stone-500 sm:text-sm rounded-lg w-full p-2.5"
      />
    </div>
  )
};

export default ExpiryDateFields;
