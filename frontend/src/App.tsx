import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import MedicalHistory from "./pages/MedicalHistory/MedicalHistory";
import Home from "./pages/Home/Home";
import { homeNav, loginNav } from "./data/navBarData";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Characteristics from "./pages/Characteristics/Characteristics";

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
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
