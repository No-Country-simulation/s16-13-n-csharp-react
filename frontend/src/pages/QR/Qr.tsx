import React from "react";
import PetInfo from "./Components/PetInfo";

const Qr: React.FC = () => {
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
        <section className="bg-[#F9FCFA] bg-no-repeat bg-cover min-h-screen flex flex-col items-center justify-between">
            <div className="w-full max-w-[1408px] mx-auto p-10 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-8">Haz encontrado a:</h1>
                <PetInfo {...petData} />
                <p className="text-2xl mt-8 text-center">
                    ¡Agradecemos que contactes a su familia!
                </p>
            </div>
        </section>
    );
};

export default Qr;