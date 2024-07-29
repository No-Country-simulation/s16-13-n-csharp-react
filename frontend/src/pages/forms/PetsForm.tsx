import { FormTitle } from "../../components/FormTitle";
import { MainInput } from "../../components/MainInput";
import { MainSelect } from "../../components/MainSelects";

export default function PetsForm() {
  const handleChange = () => {};
  return (
    <>
      <FormTitle title="Registra tu mascota" />
      <form>
        <MainInput
          label="Nombre"
          type="text"
          options={{ placeholder: "Nombre" }}
          data={(e) => console.log(e)}
        />
        <MainSelect label="Especie" options={[]} onChange={handleChange} />
        <MainSelect
          label="Sexo"
          options={["Macho", "Hembra"]}
          onChange={handleChange}
        />
        <MainInput
          label="Raza"
          type="text"
          options={{ placeholder: "Raza" }}
          // value={formData.raza}
          data={handleChange}
        />
        <MainInput
          label="Fecha de nacimiento"
          type="date"
          options={{ placeholder: "Fecha de nacimiento" }}
          // value={formData.fechaNacimiento}
          data={handleChange}
        />
        {/* <Button text="Guardar" onClick={handleSubmit} /> */}
      </form>
    </>
  );
}
