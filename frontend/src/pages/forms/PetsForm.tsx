import { useNavigate } from "react-router";
import { FormTitle } from "../../components/FormTitle";
import { MainBtn } from "../../components/MainBtn";
import { MainInput } from "../../components/MainInput";
import { MainSelect } from "../../components/MainSelects";
import { MdOutlineAddAPhoto } from "react-icons/md";

export default function PetsForm() {
  const navigate = useNavigate()
  const handleChange = () => {};
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('submit')
    navigate('../../carnet')
  };
  return (
    <>
      <FormTitle title="Registra tu mascota" />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex space-y-2 flex-col items-center"
      >
        <div className="w-full space-y-2">
          <div className="w-full h-[100px] flex flex-col justify-center items-center border-primary-darker">
            <label
              htmlFor="dropzone-file"
              className="w-1/2 cursor-pointer h-full border border-primary-normal-active rounded-lg flex flex-col justify-center items-center"
            >
              <MdOutlineAddAPhoto color="rgb(98 176 189)" />
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <MainInput
            label="Nombre"
            type="text"
            options={{ placeholder: "Nombre" }}
            data={(e) => console.log(e)}
          />
          <MainSelect
            label="Especie"
            options={["Gato", "Perro", "Otro"]}
            onChange={handleChange}
          />
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
        </div>
        <MainBtn name="Guardar" btnType="submit" onClickEvent={() => {}} />
      </form>
    </>
  );
}
