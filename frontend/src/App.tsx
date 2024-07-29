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
import VaccinesForm from "./pages/forms/VaccinesForm";
import PetsForm from "./pages/forms/PetsForm";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? null);
    console.log("token app: ", token);
  }, [token]);

  return (
    <div className="text-text font-Quicksand">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="characteristics" element={<Characteristics />} />
            <Route path="loginForm" element={<LoginForm />} />
            <Route path="registerForm" element={<RegisterForm />} />
          </Route>

          <Route path="/modal" element={<Modal />}>
            <Route path="pets" element={<PetsForm />} />
            <Route path="medical-history" element={<MedicalForm />} />
            <Route path="reminders" element={<ReminderForm />} />
            <Route path="vaccines" element={<VaccinesForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
