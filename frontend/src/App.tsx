import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import MedicalHistory from "./pages/MedicalHistory/MedicalHistory";
import Home from "./pages/Home/Home";
import { homeNav, loginNav } from "./data/navBarData";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Characteristics from "./pages/Characteristics/Characteristics";
import LoginForm from "./pages/Login/Login";
import RegisterForm from "./pages/Register/Register";
import Carnet from "./pages/Carnet/Carnet";

const App: React.FC = () => {
  return (
    <div className="text-text">
      <BrowserRouter>
        <NavBar navList={homeNav} optionsList={loginNav} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/medical-history" Component={MedicalHistory} />
          <Route path="/about" Component={About} />
          <Route path="/characteristics" Component={Characteristics} />
          <Route path="/loginForm" Component={LoginForm} />
          <Route path="/registerForm" Component={RegisterForm} />
          <Route path="/carnet" Component={Carnet} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
