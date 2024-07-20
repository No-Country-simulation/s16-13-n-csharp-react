import { tipsList } from "../../data/tips";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <div className="pb-10">
      <picture className="absolute -z-50 size-full">
        <img className="fixed" src="./background.svg" alt="" />
      </picture>
      <section className="h-screen grid grid-cols-5 gap-10 justify-center items-center p-10 text-xl">
        <div className="col-span-2">
          <h1 className="text-primary-dark lg:text-9xl md:text-7xl">PETOPIA</h1>
          <h3 className="text-primary-darker lg:text-4xl md:text-2xl font-bold">
            La app favorita de tu mascota
          </h3>
          <p>
            Somos una aplicación web que te permitirá recordarte las visitas al
            veterinario, sus vacunas, desparatizaciones, sus datos personales y
            tengas el historial médico de tu mascota, ¡todo en un solo lugar!
            Porque tu mascota es parte de tu familia.
          </p>
          <a className="text-primary-darker font-bold" href="#">
            Registrarme
          </a>
        </div>

        <picture className="col-span-3 lg:p-20 md:p-10">
          <img src="./cat-dog.png" alt="" />
        </picture>
      </section>
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
