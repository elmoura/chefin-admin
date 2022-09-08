import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { Button } from "../../components/button";
import { TextInput } from "../../components/text-input";
import { OrganizationsApiService } from "../../services/organizations-api.service";
import { CreateOrganizationInput } from "../../services/types/create-organization-input";
import { CreateOrganizationOutput } from "../../services/types/create-organization-output";
import "./index.css";

const organizationsApiService = new OrganizationsApiService();

const saveOrganization = async (
  payload: CreateOrganizationInput
): Promise<CreateOrganizationOutput> => {
  return organizationsApiService.createOrganization(payload);
};

export const CreateOrganization: FunctionComponent = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [businessSegment, setBusinessSegment] = useState("");

  const createOrganizationInitialValues: CreateOrganizationInput = {
    name: "",
    businessSegment: "",
    prefix: "",
    user: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
    },
    locations: [
      {
        state: "",
        city: "",
        neighborhood: "",
        postalCode: "",
        street: "",
        number: "",
        complement: "",
        locationName: "",
      },
    ],
  };

  const formik = useFormik({
    initialValues: createOrganizationInitialValues,
    onSubmit: async (values) => {
      const response = saveOrganization(values);
      console.log({ response });
      return response;
    },
  });

  return (
    <div className="background">
      <main className="container">
        <form className="create-org-form" onSubmit={formik.handleSubmit}>
          <h1>Cadastrar empresa</h1>

          <h2>Dados da empresa</h2>

          <fieldset className="organization-data">
            <legend>
              Nome da empresa
              <TextInput value={} onChange={formik.handleChange} />
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

          <Button text="Enviar" />
        </form>
      </main>
    </div>
  );
};
