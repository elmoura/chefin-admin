import React from "react";
import ReactDOM from "react-dom/client";
import { CreateOrganization } from "./pages/create-organization";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CreateOrganization />
  </React.StrictMode>
);
