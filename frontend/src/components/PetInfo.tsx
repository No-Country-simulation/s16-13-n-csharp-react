import React from "react";
import QRCode from "qrcode.react";

interface PetInfoProps {
  name: string;
  species: string;
  gender: string;
  breed: string;
  birthDate: string;
  owner: string;
  contactNumber: string;
  imageUrl: string;
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
  name,
  species,
  gender,
  breed,
  birthDate,
  owner,
  contactNumber,
  imageUrl,
}) => {
  const petData = JSON.stringify({
    name,
    species,
    gender,
    breed,
    birthDate,
    owner,
    contactNumber,
  });

  return (
    <div className="w-[483px] overflow-hidden bg-[#F9FCFA] rounded-[25px] custom-box-shadow p-[40px] flex flex-col gap-[34px]">
      <div className="flex justify-between">
        <img
          className="object-cover w-[150px] h-[159px]"
          src={imageUrl}
          alt={`${name} the ${species}`}
        />
        <div className="w-full flex flex-col gap-[61px] items-center">
          <QRCode value={petData} />
          <p className="font-Poppins font-semibold leading-6 text-[#37636A]">
            Carnet Identificatorio
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        <InfoField label="Nombre" value={name} />
        <div className="flex gap-5">
          <InfoField label="Especie" value={species} />
          <InfoField label="Sexo" value={gender} />
        </div>
        <div className="flex gap-5">
          <InfoField label="Raza" value={breed} />
          <InfoField label="Fecha de nacimiento" value={birthDate} />
        </div>
        <InfoField label="Familiar" value={owner} />
        <InfoField label="Celular de contacto" value={contactNumber} />
      </div>
    </div>
  );
};

export default PetInfo;
