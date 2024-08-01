import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Characteristics from "./pages/Characteristics/Characteristics";
import Modal from "./pages/Modal/Modal";
import { Main } from "./pages/Main";
import MedicalForm from "./pages/forms/MedicalForm";
import LoginForm from "./pages/Login/Login";
import RegisterForm from "./pages/Register/Register";
import ReminderForm from "./pages/forms/ReminderForm";
import Carnet from "./pages/Carnet/Carnet";
import Welcome from "./pages/Welcome/Welcome";
import VaccinesForm from "./pages/forms/VaccinesForm";
import PetsForm from "./pages/forms/PetsForm";
import { NotFound } from "./pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "./auth/AuthProvider";
import { Qr } from "./pages/QR/Qr";

const App: React.FC = () => {
  const { handlerLogin, login } = useContext(AuthContext);

  useEffect(() => {
    handlerLogin();
  }, [!login.isAuth]);

  return (
    <div className="text-text font-Quicksand">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={Main(false)}>
            <Route index element={<Home />} />
            <Route path="qr" element={<Qr />} />
            <Route path="about" element={<About />} />
            <Route path="characteristics" element={<Characteristics />} />
            <Route path="loginForm" Component={LoginForm} />
            <Route path="registerForm" Component={RegisterForm} />
          </Route>

          <Route path="/user" element={Main(true)}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="carnet" element={<Carnet />} />
            <Route path="modal" element={<Modal />}>
              <Route path="medical-history" element={<MedicalForm />} />
              <Route path="reminders" element={<ReminderForm />} />
              <Route path="pets" element={<PetsForm />} />
              <Route path="medical-history" element={<MedicalForm />} />
              <Route path="reminders" element={<ReminderForm />} />
              <Route path="vaccines" element={<VaccinesForm />} />
            </Route>
          </Route>
          <Route path="404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
