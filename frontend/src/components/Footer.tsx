export default function Footer() {
  return (
    <footer className="h-40 bg-primary-dark-hover grid grid-cols-7 p-6 text-sm">
      <section className="col-span-4 flex flex-col justify-center space-y-4">
        <picture className="w-8">
          <img src="/logo.svg" alt="logo" />
        </picture>
        <ul className="underline flex space-x-5">
          <li>
            <a href="#">Política de Privacidad</a>
          </li>
          <li>
            <a href="#">Términos de Servicio</a>
          </li>
          <li>
            <a href="#">Ajustes de Cookies</a>
          </li>
        </ul>
      </section>
      <section className="flex flex-col col-start-5 col-end-8 space-y-2">
        <h5 className="text-lg font-bold">Subscríbete</h5>
        <div className="grid grid-cols-2 space-x-2">
          <input
            className=" border border-primary-darker w-full rounded px-2 py-1"
            placeholder="Entra tu email"
            type="ematl"
          />
          <button className="border border-primary-darker px-2 py-1 rounded">
            Subscribirse
          </button>
        </div>

        <p>
          Suscribiéndote estás de acuerdo con la{" "}
          <a href="#" className="underline">
            {" "}
            Política de Privacidad
          </a>
        </p>
      </section>
    </footer>
  );
}
