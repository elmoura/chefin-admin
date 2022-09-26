import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { CreateLocationInput } from "../../services/types/create-organization-input";
import { TextInput } from "../text-input";
import "./index.css";

export const CreateOrganizationLocationForm: FunctionComponent = ({}) => {
  const createLocationData: CreateLocationInput = {
    state: "",
    city: "",
    neighborhood: "",
    postalCode: "",
    street: "",
    number: "",
    complement: "",
    locationName: "",
  };

  const formik = useFormik({
    onSubmit: () => {},
    initialValues: createLocationData,
  });

  return (
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
  );
};
