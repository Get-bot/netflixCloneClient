import {store} from "../store/store";
import {authAction} from "../features/auth/authSlice";

const authToken = () => store.getState().auth.user?.token;

const authHeader = (url: string) => {
  const token = authToken();
  const isLoggedIn = !!token;
  const API_URL = process.env.REACT_APP_API_URL ?? "";
  const isApiUrl = url.startsWith(API_URL);
  if (isLoggedIn && isApiUrl) {
    return {Authorization: `Bearer ${token}`};
  } else {
    return {};
  }
}

const request = (method: string) => {
  return (url: string, body?: any) => {
    const requestOptions: any = {
      method,
      headers: authHeader(url),
    };
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions).then(handleResponse);
  }
}

const handleResponse = (response: any) => {
  return response.json().then((data: any) => {
    console.log("handleResponse", data)
    if (!response.ok) {
      if ([401, 403].includes(response.status) && authToken()) {
        const logout = () => store.dispatch(authAction.logout());
        logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};
