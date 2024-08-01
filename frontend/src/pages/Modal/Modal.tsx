import { IoMdClose } from "react-icons/io";
import { Outlet, useNavigate } from "react-router";

export default function Modal() {
  const navigate = useNavigate();

  return (
    
    <section className="flex w-full items-center justify-center h-screen bg-no-repeat bg-cover bg-[#F9FCFA]">
      <img className="absolute min-h-full" src="/paws.png"/>
      <div className="relative w-full max-w-[480px] p-[48px] bg-[#F9FCFA] rounded-[25px] custom-box-shadow">
        <button className="absolute right-[48px]" onClick={() => navigate(-1)}>
          <IoMdClose size={20} />
        </button>
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
