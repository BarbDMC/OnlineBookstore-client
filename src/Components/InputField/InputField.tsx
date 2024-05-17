
interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxLength?: number;
}

const InputField = ({ label, type, value, onChange, placeholder, maxLength }: InputFieldProps) => (
  <div className="mb-4">
    <label className="block mb-2 text-stone-500 text-lg font-bold font-['Poppins']">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`${type === 'number' ? 'appearance-none' : ''} appearance-none bg-stone-50 border border-stone-500 text-stone-500 sm:text-sm rounded-lg block w-full p-2.5`}
    />
  </div>
);

export default InputField;
