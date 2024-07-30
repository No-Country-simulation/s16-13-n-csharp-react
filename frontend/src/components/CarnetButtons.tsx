import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  link?: string;
  content?: any;
}

const ToolCard = ({ title, link = "#", content }: ToolCardProps) => {
  return (
    <div className=" w-[296px] h-[213px px-[15px] flex flex-col gap-[42px] items-center justify-center pt-[52px] pb-[34px] custom-box-shadow rounded-[20px] bg-[#F9FCFA]">
      <h2 className=" font-Poppins w-full text-center text-[32px] leading-[48px] text-[#37636A] font-medium">
        {title}
      </h2>
      {!content ? (
        <Link
          className="py-3 text-2xl font-bold leading-9 font-Poppins bg-[#4A848E] text-white rounded-[10px] w-[199px] flex justify-center"
          to={link}
        >
          Agregar
        </Link>
      ) : (
        content
      )}
    </div>
  );
};

export default function CarnetButtons() {
  return (
    <section className="grid grid-cols-2 grid-rows-2 gap-20 p-10">
      <ToolCard title="Historial Médico" link="../modal/medical-history" />
      <ToolCard title="Registro de Vacunas" link="../modal/vaccines" />
      <ToolCard title="Recordatorios" link="../modal/reminders" />
      <ToolCard
        title="Notificaciones"
        content={
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
        }
      />
    </section>
  );
}
