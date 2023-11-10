import * as React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./routes/Root";
import SignInRoot from "./routes/SignInRoot";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/LoggedInMainPage/TestPage";
import SignInPage from "./pages/SignInPage/SignInPage";

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
    path: "/signin",
    element: <SignInRoot/>,
    children: [
      {
        path: "",
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
  return (
    <RouterProvider router={router}/>
  );
}

export default App;