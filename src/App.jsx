import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import User from "./components/users";
// import Home from './components/Home';
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
import Cart from "./components/cart";
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
          <Cart />
        </>
      ),
    },
  ]);
  return (
    <>
      {/* <User data={{name:"Krupali"}}/>
   <Home /> */}

      <RouterProvider router={router}> </RouterProvider>
    </>
  );
}
