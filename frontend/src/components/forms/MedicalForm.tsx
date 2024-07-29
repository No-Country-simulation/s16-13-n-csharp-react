import { FormTitle } from "../FormTitle";
import { MainInput } from "../MainInput";

export default function MedicalForm() {
  return (
    <>
      <FormTitle title="Historial Médico Veterinario" />
      <form className="flex flex-col items-center justify-center w-full p-4 mt-4 space-y-4 lg:space-y-6">
        <div className="w-full">
          {/* vet */}
          <MainInput
            type="text"
            label="Profecional Veterinario"
            data={(e) => console.log(e.target.value)}
          />
          {/* diagnosis */}
          <MainInput
            type="text"
            label="Diagnóstico"
            data={(e) => console.log(e)}
          />
          {/* treatment */}
          <MainInput
            type="text"
            label="Tratamiento en consultorio"
            data={(e) => console.log(e)}
          />
          {/* home-treatment */}
          <MainInput
            type="text"
            label="Tratamiento domiciliario"
            data={(e) => console.log(e)}
          />
          {/* next appointment */}
          <MainInput
            type="date"
            label="Próxima visita"
            data={(e) => console.log(e)}
          />
        </div>

        <button
          type="submit"
          className="w-2/3 py-3 text-white bg-[#4A848E] rounded-[10px] font-Poppins font-bold leading-6"
          // disabled={!acceptTerms}
        >
          Guardar
        </button>
      </form>
    </>
  );
}
