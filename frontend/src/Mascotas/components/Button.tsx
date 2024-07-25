interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
    <button
        className="bg-buttonMainFill text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onClick}
    >
        {text}
    </button>
);

export default Button;