interface LabelProps {
    text: string;
    htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="block text-petopiaH2 font-medium">
            {text}
        </label>
    );
};

export default Label;