import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { CreateOrganization } from "./pages/create-organization";
import "./index.css";
import { queryClient } from "@api/api";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CreateOrganization />
    </QueryClientProvider>
  </React.StrictMode>
);
