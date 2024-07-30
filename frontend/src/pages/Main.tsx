import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { homeNav, userNavigation, loginNav } from "../data/navBarData";
import Footer from "../components/Footer";

export const Main = (isAuth: Boolean) => {
  return (
    <>
      <NavBar
        navList={!isAuth ? homeNav : userNavigation}
        optionsList={!isAuth ? loginNav : []}
      />
      <div className="w-full min-h-screen">
        <Outlet />
      </div>
      {!isAuth && <Footer />}
    </>
  );
};
