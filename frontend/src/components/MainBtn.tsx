interface ButtonProps {
  name: string;
  btnType?: 'submit' | 'button' | 'reset' | undefined;
  onClickEvent: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

export const MainBtn = ({name, onClickEvent, btnType} : ButtonProps) => {
  return (
    <button 
    type={btnType}
    className="rounded-lg bg-primary-dark text-primary-light py-3 px-5 w-40 font-bold" 
    onClick={onClickEvent}>
      {name}
    </button>
  );
}
