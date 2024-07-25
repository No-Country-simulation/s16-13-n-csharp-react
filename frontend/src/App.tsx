import Mascotas from './Mascotas/Mascotas';
import Vacunas from './Vacunas/Vacunas'

function App() {

  return (
    <div className="App min-h-screen flex items-center justify-center p-4 bg-[url('assets/backgroundMascota.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <Mascotas />
      </div>
    </div>
  );
}

export default App
