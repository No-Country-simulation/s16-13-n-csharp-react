import { Link } from "react-router-dom";

export default function CarnetButtons() {
  return (
    <section className="flex flex-col gap-[132px]">
      <div className="flex gap-[110px]">
        <div className=" w-[296px] h-[213px px-[15px] flex flex-col gap-[42px] items-center justify-center pt-[52px] pb-[34px] custom-box-shadow rounded-[20px] bg-[#F9FCFA]">
          <h2 className=" font-Poppins text-[32px] leading-[48px] text-[#37636A] font-medium">
            Historial Médico
          </h2>
          <Link
            className="py-3 text-2xl font-bold leading-9 font-Poppins bg-[#4A848E] text-white rounded-[10px] w-[199px] flex justify-center"
            to="#"
          >
            Agregar
          </Link>
        </div>
        <div className=" w-[296px] h-[213px px-[15px] flex flex-col gap-[42px] items-center justify-center pt-[52px] pb-[34px] custom-box-shadow rounded-[20px] bg-[#F9FCFA]">
          <h2 className=" font-Poppins text-[32px] leading-[48px] text-[#37636A] font-medium text-center">
            Registro de Vacunas
          </h2>
          <Link
            className="py-3 text-2xl font-bold leading-9 font-Poppins bg-[#4A848E] text-white rounded-[10px] w-[199px] flex justify-center"
            to="#"
          >
            Agregar
          </Link>
        </div>
      </div>
      <div className="flex gap-[110px]">
        <div className=" w-[296px] h-[213px px-[15px] flex flex-col gap-[42px] items-center justify-center pt-[52px] pb-[34px] custom-box-shadow rounded-[20px] bg-[#F9FCFA]">
          <h2 className=" font-Poppins text-[32px] leading-[48px] text-[#37636A] font-medium">
            Recordatorios
          </h2>
          <Link
            className="py-3 text-2xl font-bold leading-9 font-Poppins bg-[#4A848E] text-white rounded-[10px] w-[199px] flex justify-center"
            to="#"
          >
            Agregar
          </Link>
        </div>
        <div className=" w-[296px] h-[213px px-[15px] flex flex-col gap-[42px] items-center justify-center pt-[52px] pb-[34px] custom-box-shadow rounded-[20px] bg-[#F9FCFA]">
          <h2 className=" font-Poppins text-[32px] leading-[48px] text-[#37636A] font-medium">
            Notificaciones
          </h2>
          <div className="flex items-center gap-2">
            <input
              className="rounded-[20px]"
              type="checkbox"
              id="no-notifications"
            />
            <label
              htmlFor="no-notifications"
              className="font-medium leading-6 font-Poppins"
            >
              Usted aún no tiene ninguna notificación
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
