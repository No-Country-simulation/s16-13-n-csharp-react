export default function Characteristics() {
  return (
    <div className="h-screen flex flex-col px-20 py-10 text-lg bg-[url('../formbg.png')] bg-no-repeat bg-cover">
      <section className="flex flex-col w-full space-y-10">
        <h5 className="text-lg font-bold">Características de la App:</h5>

        <ul className="px-6 space-y-6">
          <li>
            <p>
              <span className="text-lg font-bold">
                Registro de la persona dueña de la mascota:
              </span>{" "}
              Podrás colocar tus datos principales para que tu mascota te pueda
              ser entregada en caso de que se pierda.
            </p>
          </li>
          <li>
            <p>
              <span className="text-lg font-bold">
                Carnet identificatorio de tu mascota:
              </span>{" "}
              Te permitirá tenerlo con foto, datos y QR de tu mascota, para
              tener una identificación oficial en caso de pérdida.
            </p>
          </li>
          <li>
            <p>
              <span className="text-lg font-bold">
                Historial médico veterinario:
              </span>{" "}
              Te ayudará a tener un seguimiento completo de su salud.
            </p>
          </li>
          <li>
            <p>
              <span className="text-lg font-bold">
                Registro de las vacunas:
              </span>{" "}
              Te proveerá de un listado con las que se aplicó, para llevar más
              control de su salud.
            </p>
          </li>
          <li>
            <p>
              <span className="text-lg font-bold">
                Recordatorios de vacunas:
              </span>{" "}
              Incluye recordatorios de vacunaciones, desparatizaciones y
              consultas veterinarias para que tu mascota siempre esté bien
              protegida en su salud.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
