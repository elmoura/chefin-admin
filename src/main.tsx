import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CreateOrganization } from "./pages/create-organization";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CreateOrganization />
  </React.StrictMode>
);
