// @ts-nocheck
import { tipsList } from "../../data/tips";
import { Card } from "./components/Card";
import Stage from "./components/Stage";
export default function Home() {
  return (
    <div className="pb-10 bg-[url('./background.svg')] bg-no-repeat bg-cover font-Quicksand">

      {/* welcome section */}
      <section className="h-screen w-full">
        <div className="absolute z-40 w-1/2 h-full flex flex-col justify-center p-10 space-y-4">
          <h1 className="font-Poppins text-primary-dark lg:text-9xl md:text-7xl">PETOPIA</h1>
          <h3 className="font-Poppins text-primary-darker lg:text-4xl md:text-2xl font-bold">
            La app favorita de tu mascota
          </h3>
          <p>
            Somos una aplicación web que te permitirá recordarte las visitas al
            veterinario, sus vacunas, desparatizaciones, sus datos personales y
            tengas el historial médico de tu mascota, ¡todo en un solo lugar!
            Porque tu mascota es parte de tu familia.
          </p>
          <a className="font-Poppins text-primary-darker font-bold" href="#">
            Registrarme
          </a>
        </div>
        <Stage />
      </section>

      {/* care tips */} 
      <section>
        {tipsList.map((element, inx) => (
          <Card
            key={inx}
            position={inx}
            title={element.title}
            description={element.description}
            link={element.link}
            image={element.image}
          />
        ))}
      </section>
      <section className="flex w-full justify-center">
        <button className="border border-primary-darker text-primary-darker rounded-lg p-4 font-bold">
          Mira más cuidados para tu mascota
        </button>
      </section>
    </div>
  );
}
