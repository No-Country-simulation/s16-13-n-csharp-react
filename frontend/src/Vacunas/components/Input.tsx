interface InputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, id }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            id={id}
            className="mt-1 p-2 border border-inputBorder rounded-xl w-full text-textLight bg-inputBg shadow-formShadow"
        />
    );
};

export default Input;