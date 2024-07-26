interface InputFieldProps {
  type?: string;
  label: string;
  required?: boolean;
  data: (value: any) => void;
  options?: {};
}

export const MainInput: React.FC<InputFieldProps> = ({
  type = "",
  label,
  required = false,
  data,
  options = {},
}) => (
  <div className="flex flex-col gap-2">
    <label className="block text-text font-Poppins leading-6">
      {label}
      {required && "*"}
    </label>
    <input
      type={type}
      className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD]"
      aria-label={label}
      required={required}
      onChange={(e) => data(e)}
      {...options}
    />
  </div>
);
