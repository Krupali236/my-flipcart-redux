import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
import CartContainer from "./containers/CartContainer";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <HeaderContainer />
          <HomeContainer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <CartContainer />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  );
}
