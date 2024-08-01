export default function About() {
  return (
    <div className="h-screen flex flex-col px-20 py-10 space-y-10 bg-[url('../formbg.png')] bg-no-repeat bg-cover">
      <section className="flex flex-col w-full space-y-4">
        <p>
          <span className="text-lg font-bold">El objetivo principal</span> de
          Petopia es brindar a los dueños de mascotas herramientas y recursos
          para cuidar mejor la salud y el bienestar de sus animales.
        </p>

        <p>
          <span className="text-lg font-bold">Nuestra misión</span> implica ir
          más allá de simplemente ofrecer funciones tecnológicas, es enfocarnos
          en crear una experiencia integral que promueva la tenencia responsable
          y el cuidado preventivo.
        </p>

        <p>
          <span className="text-lg font-bold">Nuestra visión</span> es la de
          transformarnos en el recurso indispensable para el cuidado integral de
          las mascotas, consolidando una comunidad vibrante y comprometida con
          el bienestar animal a nivel nacional.
        </p>
      </section>

      <section className="flex flex-col w-full space-y-4">
        <p>
          <span className="text-lg font-bold">Los valores</span> fundamentales
          de Petopia son:
        </p>

        <ul className="list-decimal list-inside">
          <li>
            Bienestar de la mascota: El bienestar es nuestro valor principal. Es
            nuestro deber promover la salud física de las mascotas, y prevenir
            el sufrimiento y el maltrato animal.
          </li>
          <li>
            Atención responsable: Fomentamos la tenencia responsable de
            mascotas. Esto incluye informar y educar a los dueños sobre las
            necesidades básicas de sus animales, como alimentación, ejercicio,
            atención veterinaria y socialización.
          </li>
          <li>
            Prevención: Tenemos un enfoque preventivo para el cuidado de la
            salud de las mascotas. Esto incluye proporcionar información sobre
            cómo prevenir enfermedades comunes, realizar chequeos regulares y
            detectar problemas de salud temprano.
          </li>
          <li>
            Accesibilidad: Nos propusimos ser accesibles para todos los dueños
            de mascotas, independientemente de su ubicación, nivel
            socioeconómico o conocimiento tecnológico.
          </li>
          <li>
            Confianza: Somos una fuente confiable de información y recursos para
            los dueños de mascotas. La información proporcionada está basada en
            evidencia científica y actualizada.
          </li>
        </ul>
      </section>
    </div>
  );
}
