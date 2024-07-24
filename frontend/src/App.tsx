import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Characteristics from "./pages/Characteristics/Characteristics";
import Modal from "./pages/Modal/Modal";
import { Main } from "./pages/Main";
import MedicalForm from "./components/forms/MedicalForm";

const App: React.FC = () => {
  return (
    <div className="text-text">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="characteristics" element={<Characteristics />} />
          </Route>

          <Route path="/modal" element={<Modal />}>
            <Route path="medical-history" element={<MedicalForm />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
