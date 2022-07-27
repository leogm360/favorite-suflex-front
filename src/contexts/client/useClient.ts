import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { ClientContext } from "./client";

export const useClient = (client: string) => {
  const { changeClient } = useContext(ClientContext);

  changeClient(client);

  return {
    query: useQuery,
    mutation: useMutation,
  };
};
