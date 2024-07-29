interface TextAreaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    id: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, id }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            id={id}
            className="mt-1 p-2 border border-inputBorder rounded-xl w-full text-textLight bg-inputBg shadow-formShadow"
        />
    );
};

export default TextArea;