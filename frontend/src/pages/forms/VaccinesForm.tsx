import { FormTitle } from "../../components/FormTitle";
import { MainInput } from "../../components/MainInput";

export default function VaccinesForm() {
  return (
    <>
    <FormTitle title="Registro de Vacunas"/>
      <form className="mt-6">
        <MainInput
          type="text"
          label="Tipo de vacuna"
          data={(e) => console.log(e.target.value)}
        />
        <MainInput
          type="date"
          label="Fecha de aplicación"
          data={(e) => console.log(e.target.value)}
        />
        <MainInput type="hidden" label="Observaciones" data={() => {}} />
        <textarea
          // value={value}
          // onChange={onChange}
          // id={id}
          className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD]"
        />
        {/* <Button text="Guardar" onClick={handleSave} /> */}
      </form>
    </>
  );
}
