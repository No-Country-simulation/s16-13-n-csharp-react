import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { homeNav, loginNav } from "../data/navBarData";
import Footer from "../components/Footer";

export const Main = () => {
  return (
    <>
      <NavBar navList={homeNav} optionsList={loginNav} />
      <Outlet />
      <Footer />
    </>
  );
};
