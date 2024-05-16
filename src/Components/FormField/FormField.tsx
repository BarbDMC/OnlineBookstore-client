
type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
};

const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, onChange, className = '', rows }) => {
  return (
    <div className="flex-1">
      <label htmlFor={name} className="text-stone-500 text-lg font-bold font-['Poppins']">{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`mt-1 py-2 px-4 block w-full bg-stone-50 rounded-lg border border-stone-500 text-stone-500 opacity-50 text-lg font-bold font-['Poppins'] ${className}`}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`block py-2 px-4 bg-stone-50 rounded-lg border border-stone-500 text-stone-500 opacity-50 text-lg font-bold font-['Poppins'] ${className}`}
        />
      )}
    </div>
  );
};

export default FormField;
