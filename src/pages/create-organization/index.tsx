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
    locations: [],
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
              <TextInput
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </legend>

            <legend>
              Especialidade do restaurante
              <TextInput
                id="businessSegment"
                name="businessSegment"
                value={formik.values.businessSegment}
                onChange={formik.handleChange}
              />
            </legend>
          </fieldset>

          <h2>Dados das unidades:</h2>

          <Button text="Enviar" />
        </form>
      </main>
    </div>
  );
};
