interface FormSelectProps {
    label: string;
    value: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect: React.FC<FormSelectProps> = ({ label, value, options, onChange }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
            {label}
        </label>
        <select
            id={label}
            value={value}
            onChange={onChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-inputBg shadow-formShadow border-inputBorder"
        >
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default FormSelect;