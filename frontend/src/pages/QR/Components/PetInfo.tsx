import React from "react";
import QRCode from "qrcode.react";
import { FaWhatsapp } from 'react-icons/fa';

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
        <div className="w-full max-w-[500px] bg-[#F9FCFA] rounded-[25px] custom-box-shadow p-[20px] sm:p-[40px] flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <img
                    className="object-cover w-[150px] h-[159px] rounded-[10px] mb-4 sm:mb-0"
                    src={imageUrl}
                    alt={`${name} the ${species}`}
                />
                <div className="w-full flex flex-col gap-4 items-center sm:items-end">
                    <QRCode value={petData} size={128} />
                    <p className="font-Poppins font-semibold leading-6 text-[#37636A]">
                        Carnet Identificatorio
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <InfoField label="Nombre" value={name} />
                <div className="flex flex-col sm:flex-row gap-5">
                    <InfoField label="Especie" value={species} />
                    <InfoField label="Sexo" value={gender} />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    <InfoField label="Raza" value={breed} />
                    <InfoField label="Fecha de nacimiento" value={birthDate} />
                </div>
                <InfoField label="Familiar" value={owner} />
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                    <InfoField label="Celular de contacto" value={contactNumber} />
                    <a
                        href={`https://wa.me/${contactNumber.replace(/-/g, "")}`}
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
