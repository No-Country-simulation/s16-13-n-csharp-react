import { FormTitle } from "../FormTitle";
import { MainInput } from "../MainInput";

export default function ReminderForm() {
  return (
    <>
      <FormTitle title="Recordatorios" />
      <form className="flex flex-col items-center justify-center w-full p-4 mt-4 space-y-4 lg:space-y-6">
        <div className="w-full">
          {/* reminder */}
          <MainInput
            // type=""
            label="Tipo de recordatorio"
            data={(e) => console.log(e.target.value)}
            options={{ list: "reminder" }}
          />
          <datalist id="reminder">
            <option value="Vacunación"></option>
            <option value="Consulta veterinaria"></option>
            <option value="Desparasitación"></option>
          </datalist>

          {/* date */}
          <MainInput
            type="date"
            label="Fecha"
            data={(e) => console.log(e.target.value)}
          />

          {/* reminder type */}
          <MainInput
            label="Tipo de recordatorio"
            data={(e) => console.log(e.target.value)}
            options={{ list: "reminder-type" }}
          />
          <datalist id="reminder-type">
            <option value="Al escritorio"></option>
            <option value="Al celular"></option>
            <option value="Al mail"></option>
          </datalist>
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
