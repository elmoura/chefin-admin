import { FunctionComponent, useState } from "react";
import { TextInput } from "../../components/text-input";
import { OrganizationsApiService } from "../../services/organizations-api.service";
import "./index.css";

export const CreateOrganization: FunctionComponent = () => {
  const organizationsApiService = new OrganizationsApiService();

  return (
    <div className="background">
      <main className="container">
        <form className="create-org-form">
          <h1>Cadastrar empresa</h1>

          <h2>Dados da empresa</h2>

          <fieldset className="organization-data">
            <legend>
              Nome da empresa
              <TextInput />
            </legend>

            <legend>
              Especialidade do restaurante
              <TextInput />
            </legend>
          </fieldset>

          <h2>Dados das unidades:</h2>

          <fieldset className="organization-locations-data">
            <legend>
              CEP
              <TextInput />
            </legend>

            <legend>
              Cidade
              <TextInput />
            </legend>

            <legend>
              Estado
              <TextInput />
            </legend>

            <legend>
              Endereço
              <TextInput />
            </legend>

            <legend>
              Numero
              <TextInput />
            </legend>

            <legend>
              Complemento
              <TextInput />
            </legend>
          </fieldset>
        </form>
      </main>
    </div>
  );
};
