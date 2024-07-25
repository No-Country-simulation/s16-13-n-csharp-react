interface FormInputProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, placeholder, value, onChange }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
            {label}
        </label>
        <input
            id={label}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-inputBg shadow-formShadow border-inputBorder"
        />
    </div>
);

export default FormInput;