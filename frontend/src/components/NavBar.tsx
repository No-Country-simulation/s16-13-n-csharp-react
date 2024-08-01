import { Link } from "react-router-dom";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavBarProps {
  navList: { name: string; link: string }[];
  optionsList: { name: string; link: string }[];
}

export default function NavBar({ navList, optionsList }: NavBarProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const darkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full static h-14 shadow border-b-[1px] py-2 px-4 flex items-center space-x-4 bg-background z-50">
      <div className="flex items-center space-x-4">
        <picture className="h-2/3">
          <img className="h-full" src="/logo.svg" alt="logo" />
        </picture>
        <button
          className="block sm:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <ul className={`flex flex-col font-bold sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 grow text-lg text-text ${isMenuOpen ? 'block bg-white z-10 pl-5 rounded-b-lg font-bold' : 'hidden'} sm:flex`}>
        {navList.map((item, inx) => (
          <li key={inx}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <ul className="hidden sm:flex space-x-6 text-lg text-primary-darker">
        {optionsList.map((item, inx) => (
          <li key={inx}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
