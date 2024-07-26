import React, { useState } from 'react';
import Label from './components/Label';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Button from './components/Button';

const Vacunas: React.FC = () => {
  const [tipo, setTipo] = useState('');
  const [fecha, setFecha] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const handleSave = () => {
    const data = { tipo, fecha, observaciones };
    console.log('Datos para enviar a la API:', data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-backgroundLight border border-formStroke rounded-xl shadow-formShadow relative w-11/12 sm:w-96 lg:w-1/2">
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <button className="text-gray-400 hover:text-gray-600">
          &times;
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center text-petopiaH2">Registro de Vacunas</h2>
      <form>
        <div className="mb-4">
          <Label text="Tipo de vacuna" htmlFor="tipo" />
          <Input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            id="tipo"
          />
        </div>
        <div className="mb-4">
          <Label text="Fecha de aplicación" htmlFor="fecha" />
          <Input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            id="fecha"
          />
        </div>
        <div className="mb-4">
          <Label text="Observaciones" htmlFor="observaciones" />
          <TextArea
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            id="observaciones"
          />
        </div>
        <Button text="Guardar" onClick={handleSave} />
      </form>
    </div>
  );
};

export default Vacunas;