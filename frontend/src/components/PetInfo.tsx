import React from "react";
import QRCode from "qrcode.react";

interface PetInfoProps {
  id?: number;
  mascotName: string;
  species: string;
  sex: string;
  breed: string;
  dateOfBirth: string;
  owner?: string;
  contactNumber?: string;
  imageUrl?: string;
}

const InfoField: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="flex flex-col w-full gap-1">
    <p className="text-[#02120A] font-Poppins leading-[24px]">{label}</p>
    <p className="text-[#02120A] font-Poppins leading-[24px] p-3 border border-[#62B0BD] rounded-[10px]">
      {value}
    </p>
  </div>
);

const PetInfo: React.FC<PetInfoProps> = ({
  id = 0,
  mascotName,
  species,
  sex,
  breed,
  dateOfBirth,
  owner = "John Doe",
  contactNumber = "123-456-7890",
  imageUrl = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS",
}) => {
  const petID = `https://s16-13-n-csharp-react.vercel.app/qr?id=${id}`

  return (
    <div className="w-[483px] overflow-hidden bg-[#F9FCFA] rounded-[25px] custom-box-shadow p-[40px] flex flex-col">
      <div className="flex justify-between">
        <img
          className="object-cover w-[150px] h-[159px]"
          src={imageUrl}
          alt={`${mascotName} the ${species}`}
        />
        <div className="w-full flex flex-col gap-[61px] items-center">
          <QRCode value={petID} />
          <p className="font-Poppins font-semibold leading-6 text-[#37636A]">
            Carnet Identificatorio
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        <InfoField label="Nombre" value={mascotName} />
        <div className="flex gap-5">
          <InfoField label="Especie" value={species} />
          <InfoField label="Sexo" value={sex} />
        </div>
        <div className="flex gap-5">
          <InfoField label="Raza" value={breed} />
          <InfoField
            label="Fecha de nacimiento"
            value={dateOfBirth.substring(0, 9)}
          />
        </div>
        <InfoField label="Familiar" value={owner} />
        <InfoField label="Celular de contacto" value={contactNumber} />
      </div>
    </div>
  );
};

export default PetInfo;
