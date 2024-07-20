import { Link } from "react-router-dom";

interface NavBarProps {
  navList: { name: string; link: string }[];
  optionsList: string[];
}

export default function NavBar({ navList, optionsList }: NavBarProps) {
  const darkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full h-14 shadow border-b-[1px] py-2 px-4 flex items-center space-x-4 bg-background">
      <picture className="h-2/3">
        <img className="h-full" src="/logo.svg" alt="logo" />
      </picture>

      <ul className="flex space-x-4 grow text-lg text-text">
        {navList.map((item, inx) => (
          <li key={inx}>
            <Link to={item.link} >{item.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex space-x-4 text-lg text-primary-darker">
        <li>
          <button onClick={darkMode}>💡</button>
        </li>
      </ul>
    </nav>
  );
}
