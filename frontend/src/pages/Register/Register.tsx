import { useState } from "react";
import { Link } from "react-router-dom";

interface InputFieldProps {
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  required = false,
}) => (
  <div className="flex flex-col gap-2">
    <input
      type={type}
      placeholder={placeholder}
      className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD] placeholder:text-[#02120A] placeholder:font-Poppins placeholder:leading-6"
      aria-label={placeholder}
      required={required}
    />
  </div>
);

const initialRegisterForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [registerForm, setRegisterForm] = useState(initialRegisterForm);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCheckboxChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-[url('../loginbg.png')] bg-no-repeat bg-cover bg-[#F9FCFA]">
      <div className="w-full h-1/2 max-w-[480px] p-[48px] bg-[#F9FCFA] rounded-[25px] custom-box-shadow">
        <Link className="flex justify-end" to="/">
          <img src="close.svg" alt="Close Button" />
        </Link>
        <h2 className="font-Poppins mb-10 text-[35px] font-semibold leading-[48px] text-[#37636A] text-center">
          Regístrate
        </h2>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col lg:gap-4">
            <InputField type="text" placeholder="Nombre" required={true} />
            <InputField type="text" placeholder="Apellido" required={true} />
            <InputField type="tel" placeholder="Celular" required={true} />
            <InputField type="email" placeholder="Email" required={true} />
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD] placeholder:text-[#02120A] placeholder:font-Poppins placeholder:leading-6"
                  aria-label="Contraseña"
                  placeholder="Contraseña"
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
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="font-Quicksand w-full px-3 py-3 border rounded-[10px] focus:outline-none border-[#62B0BD] placeholder:text-[#02120A] placeholder:font-Poppins placeholder:leading-6"
                  aria-label="Repetir Contraseña"
                  placeholder="Repetir Contraseña"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 flex items-center right-3"
                >
                  <img
                    src={showConfirmPassword ? "eye-off.svg" : "eye.svg"}
                    alt={
                      showConfirmPassword
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"
                    }
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-[10px] border-[#62B0BD]">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={handleCheckboxChange}
                className="w-4 h-4 border border-[#62B0BD] rounded"
              />
              <label
                htmlFor="acceptTerms"
                className="text-[#02120A] font-Poppins text-[10px] leading-[15px]"
              >
                Acepto las{" "}
                <Link to="/privacy-policy" className="underline">
                  Políticas de Privacidad
                </Link>{" "}
                y los{" "}
                <Link to="/terms-conditions" className="underline">
                  Términos y Condiciones
                </Link>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <Link
              to="/welcome"
              type="submit"
              className="w-full py-3 text-white bg-[#4A848E] rounded-[10px] font-Poppins font-bold leading-6 flex justify-center"
            >
              Regístrate
            </Link>
          </div>
          <div className="mt-4 text-center">
            <p className="leading-6 font-Poppins">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/loginForm"
                className="leading-6 underline font-Poppins"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
