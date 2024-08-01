import { useState } from "react";
import { FormTitle } from "../../components/FormTitle";
import { MainBtn } from "../../components/MainBtn";
import { MainInput } from "../../components/MainInput";
import useAuth from "../../auth/useAuth";
import { notify_error, notify_success } from "../../utils/notifications";
import { useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../utils/const";

const initialVaccineForm = {
  mascotId : 8,
  vaccineName: "",
  lastDateOfApplication: "2018-06-28T15:38:24.706Z",
  reminderDate: "2018-06-28T15:38:24.706Z",
};

export default function VaccinesForm() {
  const [vaccineForm, setVaccineForm] = useState(initialVaccineForm);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleOnChange = ({ target }: any) => {
    const { name, value } = target;
    setVaccineForm({
      ...vaccineForm,
      [name]: value,
    });
  };

  const createVaccine = async () => {
    if (!login.token) {
      console.warn("No token found: ", login);
      return;
    }
    try {
      console.warn("there is an account: ", login);
      vaccineForm.lastDateOfApplication += "T15:38:24.706Z";
      console.log("data: ", vaccineForm);
      const response = await axios.post(
        BASE_URL + "VaccineTracking/PostNuevaVacuna",
        vaccineForm,
        {
          headers: {
            Authorization: `Bearer ${login.token}`,
          },
        }
      );
      console.log("vaccine registration: ", response.status);
      notify_success("El registro fue un exito!");

      if (response.status === 201) navigate(-1);
    } catch (error) {
      console.warn("Error trying to register a vaccine", error);
      notify_error(`Ups! No pudimos registrar la vacuna 😭`);
    }
  };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    createVaccine();
  };

  const { vaccineName, lastDateOfApplication, reminderDate } = vaccineForm;

  return (
    <>
      <FormTitle title="Registro de Vacunas" />
      <form
        onSubmit={handleOnSubmit}
        className="mt-6 w-full flex flex-col items-center space-y-4"
      >
        <div className="w-full">
          <MainInput
            type="text"
            label="Tipo de vacuna"
            name="vaccineName"
            value={vaccineName}
            data={(e) => handleOnChange(e)}
          />
          <MainInput
            type="date"
            label="Fecha de aplicación"
            name="lastDateOfApplication"
            value={lastDateOfApplication}
            data={(e) => handleOnChange(e)}
          />
          <MainInput type="hidden" label="Observaciones" data={() => {}} />
          <textarea
            // value={value}
            // onChange={onChange}
            // id={id}
            className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD]"
          />
        </div>
        <MainBtn name="Guardar" btnType="submit" onClickEvent={() => {}} />
      </form>
    </>
  );
}
