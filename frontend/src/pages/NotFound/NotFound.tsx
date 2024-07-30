import { useNavigate } from "react-router";
import { MainBtn } from "../../components/MainBtn";

export const NotFound = () => {
    const navigate = useNavigate()

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[url('/bgcarnet.png')] bg-cover space-y-6">
        <h2 className="text-9xl text-primary-darker">404</h2>
        <p className="text-text text-4xl">Ops! Pagina no encontrada...</p>
        <MainBtn name="Regresar" onClickEvent={() => navigate(-1)}/>
    </div>
  );
};
