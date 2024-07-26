interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="bg-buttonMainFill hover:bg-formShadow text-white font-bold py-2 px-4 rounded-xl w-full"
        >
            {text}
        </button>
    );
};

export default Button;