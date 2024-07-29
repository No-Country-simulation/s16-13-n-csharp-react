import { FormTitle } from "../../components/FormTitle";
import { MainInput } from "../../components/MainInput";

export default function MedicalForm() {
  return (
    <>
      <FormTitle title="Historial Médico Veterinario"/>
      <form className="p-4 flex flex-col justify-center items-center space-y-4 w-full mt-4 space-y-6">
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
