import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyles, ResetStyles, RootStyles } from "../styles";
import { ClientProvider } from "./client/client";

interface IChildren {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: IChildren) => {
  return (
    <ClientProvider>
      <ResetStyles />
      <RootStyles />
      <GlobalStyles />

      <ToastContainer style={{ padding: "1rem" }} />

      <BrowserRouter>{children}</BrowserRouter>
    </ClientProvider>
  );
};
