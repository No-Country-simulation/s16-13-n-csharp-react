import { BASE_URL, userData } from "../utils/const";
import axios from "axios";
import { notify_success } from "../utils/notifications";

const initialLogin = JSON.parse(sessionStorage.getItem("login") as string) ?? {
  isAuth: false,
  token: "",
};

// console.log("storage login: ", initialLogin);
function useAuth() {
  const login = initialLogin;
  const handlerLogin = async () => {
    if (login.token) return;
    try {
      const response = await axios.post(BASE_URL + "UserLogin", userData);
      login.isAuth = true;
      login.token = response.data.token;
      console.log("logged user: ", login);
      sessionStorage.setItem("login", JSON.stringify(login));

      notify_success(response.data.message);
    } catch (error) {
      console.warn("Error trying to login", error);
    }
  };

  return {
    login,
    handlerLogin,
  };
}

export default useAuth;
