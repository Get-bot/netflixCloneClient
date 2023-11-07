import * as React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useNavigate, useLocation} from "react-router";

import Root from "./routes/root";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/LoggedInMainPage/TestPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import {history} from "./helpers/history";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
    ],
  },
  {
    path: "/register",
    element: <Root/>,
    children: [
      {
        path: "/register/",
      },
      {
        path: "/register/:id",
      },
    ],
  },
  {
    path: "/login",
    element: <Root/>,
    children: [
      {
        path: "/login/",
        element: <SignInPage/>
      }
    ],
  },
  {
    path: "/test",
    element: <Root/>,
    children: [
      {
        path: "/test/",
        element: <TestPage/>
      }
    ]
  }
])

const App = () => {
  // history.navigate = useNavigate();
  // history.location = useLocation();

  return (
    <RouterProvider router={router}/>
  );
}

export default App;