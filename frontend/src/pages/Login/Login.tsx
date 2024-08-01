import { useState } from "react";
import { Link } from "react-router-dom";

interface InputFieldProps {
  type: string;
  label: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  required = false,
}) => (
  <div className="flex flex-col gap-2">
    <label className="block text-[#02120A] font-Poppins leading-6">
      {label}
      {required && "*"}
    </label>
    <input
      type={type}
      className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD]"
      aria-label={label}
      required={required}
    />
  </div>
);

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-[url('../loginbg.png')] bg-no-repeat bg-cover bg-[#F9FCFA]">
      <div className="w-full max-w-[480px] p-[48px] bg-[#F9FCFA] rounded-[25px] custom-box-shadow">
        <Link className="flex justify-end" to="/">
          <img src="close.svg" alt="Close Button" />
        </Link>
        <h2 className="font-Poppins mb-[83px] text-[40px] font-semibold leading-[48px] text-[#37636A] text-center">
          Inicia Sesión
        </h2>
        <form>
          <div className="flex flex-col gap-6">
            <InputField type="email" label="Email" required={true} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="block text-[#02120A] font-Poppins leading-6">
                  Contraseña*
                </label>
                <a href="#" className="leading-6 underline font-Poppins">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD]"
                  aria-label="Contraseña"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 flex items-center right-3"
                >
                  <img
                    src={showPassword ? "eye-off.svg" : "eye.svg"}
                    alt={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <Link
              to="../user/welcome"
              type="submit"
              className=" flex justify-center w-full py-3 text-white bg-[#4A848E] rounded-[10px] font-Poppins font-bold leading-6"
            >
              Inicia sesión
            </Link>
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 border rounded-[10px] font-Poppins border-[#62B0BD] leading-6"
            >
              <div className="flex items-center gap-3">
                <span>
                  <img src="google.svg" alt="Google icon" />
                </span>
                <span>Inicia sesión con Google</span>
              </div>
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="leading-6 font-Poppins">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/registerForm"
                className="leading-6 underline font-Poppins"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
