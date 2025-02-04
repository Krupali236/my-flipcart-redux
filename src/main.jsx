import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit"; // <-- Update here
import { Provider } from "react-redux";
import rootReducer from "./services/Reducers/index.jsx";
import App from "./App.jsx";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools
});

console.log("Redux Store Initialized:", store.getState());

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
