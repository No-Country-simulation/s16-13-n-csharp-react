import PetInfo from "./Components/PetInfo";
import { useEffect, useState } from "react";
import { notify_error } from "../../utils/notifications";
import axios from "axios";
import { BASE_URL } from "../../utils/const";

const initialPetData = {
  id : 0,
  mascotName: "",
  species: "Perro",
  breed: "",
  sex: "Hembra",
  dateOfBirth: "2024-08-22T00:00:00Z",
  mascotPhoto:
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
  ownerFullName: "",
  ownerPhoneNumber: "",
};

export const Qr = () => {
  const [id, setId] = useState<string | null>(null);
  const [petData, setPetData] = useState(initialPetData);

  const getPetData = async () => {
    if (!id) {
      notify_error("No encontramos el id!");
      return;
    }
    try {
      const response = await axios.get(BASE_URL + `QR/RecuperarMascota/${id}`);

      return response.data;
    } catch (error) {
      notify_error("🐕 Ups! No encontramos información...🐈");
    }
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const idParam = urlSearchParams.get("id");
    setId(idParam);
    if(id) getPetData().then((data) => setPetData({ ...data, id }));
  }, [!id]);

  // const petData = {
  //   name: "Buddy",
  //   species: "Dog",
  //   gender: "Male",
  //   breed: "Golden Retriever",
  //   birthDate: "2020/01/01",
  //   owner: "John Doe",
  //   contactNumber: "123-456-7890",
  //   imageUrl:
  //     "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
  // };

  return (
    <>
      <section className="bg-[#F9FCFA] bg-no-repeat bg-cover min-h-screen flex flex-col items-center justify-between">
        <div className="w-full max-w-[1408px] mx-auto p-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8">Haz encontrado a:</h1>
          <PetInfo {...petData} />
          <p className="text-2xl mt-8 text-center">
            ¡Agradecemos que contactes a su familia!
          </p>
        </div>
      </section>
    </>
  );
};
