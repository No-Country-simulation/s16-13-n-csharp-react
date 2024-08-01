import React, { useEffect, useState } from "react";
import PetInfo from "../../components/PetInfo";
import CarnetButtons from "../../components/CarnetButtons";
import { BASE_URL } from "../../utils/const";
import axios from "axios";
import { notify_error } from "../../utils/notifications";
import useAuth from "../../auth/useAuth";

const Carnet: React.FC = () => {
  const [pet, setPet] = useState({
    id: 0,
    mascotName: "",
    species: "",
    sex: "",
    breed: "",
    dateOfBirth: "",
  });

  const getAllPets = async () => {
    const { login } = useAuth();

    try {
      if (!login.token) getAllPets();

      const response = await axios.get(BASE_URL + "Mascot/GetMascotas", {
        headers: {
          Authorization: `Bearer ${login.token}`,
        },
      });
      return response.data;
    } catch (error) {
      notify_error("No vemos a tus mascotas 😨");
    }

    return [];
  };

  useEffect(() => {
    getAllPets().then((value) => setPet(value[value.length - 1]));
    console.log("pet: ", pet);
  }, [!pet.id]);

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
    <section className=" bg-[#F9FCFA] bg-[url('bgcarnet.png')] bg-no-repeat bg-cover">
      <div className="flex items-center max-w-[1408px] mx-auto justify-between min-h-screen px-10">
        {pet && <PetInfo {...pet} />}
        <CarnetButtons />
      </div>
    </section>
  );
};

export default Carnet;
