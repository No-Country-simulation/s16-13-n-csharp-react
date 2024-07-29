import React from "react";
import PetInfo from "../../components/PetInfo";
import CarnetButtons from "../../components/CarnetButtons";

const Carnet: React.FC = () => {
  const petData = {
    name: "Buddy",
    species: "Dog",
    gender: "Male",
    breed: "Golden Retriever",
    birthDate: "2020/01/01",
    owner: "John Doe",
    contactNumber: "123-456-7890",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
  };

  return (
    <section className=" bg-[#F9FCFA] bg-[url('bgcarnet.png')] bg-no-repeat bg-cover">
      <div className="flex items-center max-w-[1408px] mx-auto justify-between min-h-screen">
        <PetInfo {...petData} />
        <CarnetButtons />
      </div>
    </section>
  );
};

export default Carnet;
