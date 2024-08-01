interface InputFieldProps {
  type?: string;
  label?: string;
  style?: string;
  required?: boolean;
  name?: string;
  value?: string | any;
  data: (value: any) => void;
  options?: {};
}

export const MainInput: React.FC<InputFieldProps> = ({
  type = "",
  label,
  required = false,
  name = "",
  value = "",
  style = "font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD]",
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
      className={style}
      aria-label={label}
      required={required}
      name={name}
      value={value}
      onChange={(e) => data(e)}
      {...options}
    />
  </div>
);
