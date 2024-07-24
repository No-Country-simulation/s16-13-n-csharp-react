import { IoMdClose } from "react-icons/io";
import { Outlet } from "react-router";

export default function Modal() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[url('/paws.png')] bg-cover bg-no-repeat">
      <main className="z-50 w-2/5 h-full bg-background rounded-lg shadow-modal shadow-primary-light-active flex flex-col items-end p-10">
        <IoMdClose color="#7BDCEC" size={20} />
        <Outlet />
      </main>
    </div>
  );
}
