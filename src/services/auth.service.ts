import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

interface IAuthService {
  login(username: string, password: string): Promise<any>;
  logout(): void;
  register(username: string, email: string, password: string): Promise<any>;
}

class AuthService implements IAuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response: any) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  };

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
