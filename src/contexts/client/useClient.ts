import { useContext } from "react";
import { ClientContext } from "./client";

import { useQuery } from "@apollo/client";

export const useClient = (client: string) => {
  const { changeClient } = useContext(ClientContext);

  return {
    client: changeClient(client),
    request: useQuery,
  };
};
