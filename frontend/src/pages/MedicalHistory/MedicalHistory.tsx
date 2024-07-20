import MainBtn from "../../components/MainBtn";
import Form from "./components/Form";

export default function MedicalHistory() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-opacity-90"
    style={{
      backgroundImage: "url('./paws.png')"
    }}>
      <section className="w-2/5 h-full bg-background rounded-lg shadow-modal shadow-primary-light-active flex flex-col items-center p-10">
        <h4 className="text-primary-dark-hover font-bold lg:text-2xl md:text-xl">
          Historial Médico Veterinario
        </h4>

        <Form />
        <MainBtn />
      </section>
    </div>
  );
}
