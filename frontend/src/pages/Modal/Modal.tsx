import { IoMdClose } from "react-icons/io";
import { Outlet, useNavigate } from "react-router";
import MedicalForm from "../../components/forms/MedicalForm";
export default function Modal() {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-[#F9FCFA]">
      <div className="relative w-full max-w-[480px] p-[48px] bg-[#F9FCFA] rounded-[25px] custom-box-shadow">
        <button className="absolute right-[48px]" onClick={() => navigate(-1)}>
          <IoMdClose size={20} />
        </button>
        {/* <h2 className="font-Poppins mb-[83px] text-[40px] font-semibold leading-[48px] text-[#37636A] text-center">
          Inicia Sesión
        </h2> */}
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
