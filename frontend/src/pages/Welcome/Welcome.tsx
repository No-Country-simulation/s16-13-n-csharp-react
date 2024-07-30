import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen font-Quicksand bg-[url('welcomebg.png')] bg-no-repeat bg-[#F9FCFA] 2xl:bg-[length:80%_1100px]">
      <div className=" bg-[#6FC6D4] rounded-[25px] w-[767px] h-[253px] flex flex-col items-center justify-center gap-[33px] mb-[121px] welcome-shadow ">
        <h2 className="text-[36px] leading-[54px] text-[#021009]">
          ¡Gracias por usar nuestra plataforma!
        </h2>
        <p className="text-[32px] font-semibold leading-[48px]">
          ¡Te damos una cálida bienvenida!
        </p>
      </div>

      <p className=" text-[36px] leading-[54px] text-[#021009] mb-[121px]">
        Ahora puedes configurar tu cuenta y agregar a tus queridas mascotas
      </p>

      <Link
        className=" px-6 bg-[#4A848E] py-3 font-Poppins text-white font-bold leading-[36px] rounded-[10px] text-2xl"
        to="../modal/pets"
      >
        Empezar
      </Link>
    </section>
  );
}
