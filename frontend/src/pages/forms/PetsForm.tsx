import { useNavigate } from "react-router";
import { FormTitle } from "../../components/FormTitle";
import { MainBtn } from "../../components/MainBtn";
import { MainInput } from "../../components/MainInput";
import { MainSelect } from "../../components/MainSelects";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/const";
import { notify_error, notify_success } from "../../utils/notifications";
import useAuth from "../../auth/useAuth";

const initialPetForm = {
  mascotName: "",
  species: "Gato",
  breed: "",
  sex: "Macho",
  dateOfBirth: "2018-06-28T15:38:24.706Z",
};

export default function PetsForm() {
  const [petForm, setPetForm] = useState(initialPetForm);
  const { login } = useAuth();

  const { mascotName, species, sex, breed, dateOfBirth } = petForm;

  const navigate = useNavigate();
  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setPetForm({
      ...petForm,
      [name]: value,
    });
  };

  const createPet = async () => {
    if (!login.token) {
      console.warn("No token found: ", login);
      return;
    }
    try {
      console.warn("there is an account: ", login);
      petForm.dateOfBirth += 'T15:38:24.706Z'
      console.log('data: ', petForm)
      const response = await axios.post(
        BASE_URL + "Mascot/PostNuevaMascota",
        petForm,
        {
          headers: {
            Authorization: `Bearer ${login.token}`,
          },
        }
      );
      console.log("pet registration: ", response.status);
      notify_success(`Bienvenido ${mascotName}!`);

      if (response.status === 201) navigate("../../carnet");
    } catch (error) {
      console.warn("Error trying to register a pet", error);
      notify_error(`Ups! No pudimos registrar a ${mascotName} 😭`);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createPet();
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
              <input
                id="dropzone-file"
                name="mascotPhoto"
                // value={mascotPhoto}
                type="file"
                className="hidden"
                onChange={handleChange}
              />
            </label>
          </div>

          <MainInput
            label="Nombre"
            type="text"
            name="mascotName"
            value={mascotName}
            options={{ placeholder: "Nombre" }}
            data={(e) => handleChange(e)}
          />
          <MainSelect
            label="Especie"
            name="species"
            value={species}
            options={["Gato", "Perro", "Otro"]}
            onChange={(e) => handleChange(e)}
          />
          <MainSelect
            label="Sexo"
            name="sex"
            value={sex}
            options={["Macho", "Hembra"]}
            onChange={(e) => handleChange(e)}
          />
          <MainInput
            label="Raza"
            type="text"
            name="breed"
            value={breed}
            options={{ placeholder: "Raza" }}
            // value={formData.raza}
            data={(e) => handleChange(e)}
          />
          <MainInput
            label="Fecha de nacimiento"
            type="date"
            value={dateOfBirth}
            name="dateOfBirth"
            // value={formData.fechaNacimiento}
            data={(e) => handleChange(e)}
          />
        </div>
        <MainBtn name="Guardar" btnType="submit" onClickEvent={() => {}} />
      </form>
    </>
  );
}
