interface ButtonProps {
  name: string;
  onClickEvent: (event: React.MouseEvent<HTMLButtonElement>) => any;
}

export const MainBtn = ({name, onClickEvent} : ButtonProps) => {
  return (
    <button className="rounded-lg bg-primary-dark text-primary-light py-3 px-5 w-40 font-bold" onClick={onClickEvent}>
      {name}
    </button>
  );
}
