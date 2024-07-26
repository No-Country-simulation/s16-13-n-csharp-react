import { useState } from "react";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import FormSelect from "./components/FormSelect";

const Mascotas: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        especie: '',
        sexo: '',
        raza: '',
        fechaNacimiento: '',
    });
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    const especies = ['Perro', 'Gato', 'Ave', 'Reptil'];

    return (
        <div className="max-w-md w-full p-4 bg-white rounded-3xl shadow-md md:max-w-lg lg:max-w-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-petopiaH2">Registra tu mascota</h2>
            <div className="mb-4 text-center">
            <div className="border relative w-36 h-36 mx-auto mb-4 rounded-3xl overflow-hidden border-inputBorder shadow-formShadow">
                    {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Foto de la mascota"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-gray-500">+</span>
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>
            </div>
            <form>
                <FormInput label="Nombre" type="text" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
                <FormSelect label="Especie" value={formData.especie} options={especies} onChange={handleChange} />
                <FormSelect label="Sexo" value={formData.sexo} options={['Macho', 'Hembra']} onChange={handleChange} />
                <FormInput label="Raza" type="text" placeholder="Raza" value={formData.raza} onChange={handleChange} />
                <FormInput label="Fecha de nacimiento" type="date" placeholder="Fecha de nacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
                <Button text="Guardar" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default Mascotas;