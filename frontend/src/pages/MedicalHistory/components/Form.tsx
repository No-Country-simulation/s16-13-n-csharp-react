export default function Form() {
  return (
    <form className="p-4 flex flex-col space-y-4 w-full mt-4">
      {/* vet */}
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="vet">
          Profesional Veterinario
        </label>
        <input
          className="border border-primary-normal rounded-md p-1.5"
          type="text"
          name="vet"
        />
      </div>
      {/* diagnosis */}
      <div className="flex flex-col">
        <label
          className="text-lg"
          htmlFor="diagnosis"
        >
          Diagnóstico
        </label>
        <input
          className="border border-primary-normal rounded-md p-1.5"
          type="text"
          name="diagnosis"
        />
      </div>
      {/* treatment */}
      <div className="flex flex-col">
        <label
          className="text-lg"
          htmlFor="treatment"
        >
          Tratamiento en consultorio
        </label>
        <input
          className="border border-primary-normal rounded-md p-1.5"
          type="text"
          name="treatment"
        />
      </div>
      {/* home-treatment */}
      <div className="flex flex-col">
        <label
          className="text-lg"
          htmlFor="homeTreatment"
        >
          Tratamiento domiciliario
        </label>
        <input
          className="border border-primary-normal rounded-md p-1.5"
          type="text"
          name="homeTreatment"
        />
      </div>
      {/* next appointment */}
      <div className="flex flex-col">
        <label
          className="text-lg"
          htmlFor="appointment"
        >
          Próxima visita
        </label>
        <input
          className="border border-primary-normal rounded-md p-1.5"
          type="date"
          name="appointment"
        />
      </div>
    </form>
  );
}
