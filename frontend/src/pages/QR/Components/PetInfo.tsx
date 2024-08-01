import React from "react";
import QRCode from "qrcode.react";
import { FaWhatsapp } from "react-icons/fa";

interface PetInfoProps {
  id: number;
  mascotName: string;
  species: string;
  breed: string;
  sex: string;
  dateOfBirth: string;
  mascotPhoto: string | undefined;
  ownerFullName: string;
  ownerPhoneNumber: string;
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
    id,
  mascotName,
  species,
  breed,
  sex,
  dateOfBirth,
  mascotPhoto,
  ownerFullName,
  ownerPhoneNumber,
}) => {
  const petData = JSON.stringify({
    id,
    mascotName,
    species,
    breed,
    sex,
    dateOfBirth,
    mascotPhoto,
    ownerFullName,
    ownerPhoneNumber,
  });

  const qrUrl = `https://s16-13-n-csharp-react.vercel.app/qr?id=${id}`

  return (
    <div className="w-full max-w-[500px] bg-[#F9FCFA] rounded-[25px] custom-box-shadow p-[20px] sm:p-[40px] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <img
          className="object-cover w-[150px] h-[159px] rounded-[10px] mb-4 sm:mb-0"
          src={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS'}
          alt={`${mascotName} the ${species}`}
        />
        <div className="w-full flex flex-col gap-4 items-center sm:items-end">
          <QRCode value={qrUrl} size={128} />
          <p className="font-Poppins font-semibold leading-6 text-[#37636A]">
            Carnet Identificatorio
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <InfoField label="Nombre" value={mascotName} />
        <div className="flex flex-col sm:flex-row gap-5">
          <InfoField label="Especie" value={species} />
          <InfoField label="Sexo" value={sex} />
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <InfoField label="Raza" value={breed} />
          <InfoField label="Fecha de nacimiento" value={dateOfBirth} />
        </div>
        <InfoField label="Familiar" value={ownerFullName} />
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <InfoField label="Celular de contacto" value={ownerPhoneNumber} />
          <a
            href={`https://wa.me/${ownerFullName}`}
            className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 w-full sm:w-auto"
          >
            <FaWhatsapp className="w-10 h-10" />
            Chat con WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PetInfo;
