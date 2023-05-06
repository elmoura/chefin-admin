import { FunctionComponent } from "react";
import { Button } from "@components/Button";
import { CreateLocation } from "./components/CreateLocation";
import { OrganizationInfo } from "./components/OrganizationInfo";

export const CreateOrganization: FunctionComponent = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex justify-center items-center py-10">
      <main className="bg-slate-50 flex flex-col w-full md:w-[70%] md:h-[80%] rounded px-10 py-8">
        <h1 className="font-bold text-2xl pb-6 text-center">
          Cadastrar empresa
        </h1>

        <form className="create-org-form">
          <OrganizationInfo />

          <CreateLocation />

          <Button>Salvar</Button>
        </form>
      </main>
    </div>
  );
};
