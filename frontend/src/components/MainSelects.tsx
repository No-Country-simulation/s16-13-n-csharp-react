interface FormSelectProps {
  label: string;
  value?: string;
  name?: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const MainSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  options,
  name,
  onChange,
}) => (
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={label}
    >
      {label}
    </label>
    <select
      id={label}
      name={name}
      value={value}
      onChange={onChange}
      className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD]"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
