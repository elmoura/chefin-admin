import { FunctionComponent } from "react";
import { TextInput } from "@components/TextInput";

export const OrganizationInfo: FunctionComponent = () => {
  return (
    <>
      <h2 className="font-bold text-lg pb-4">Dados da empresa</h2>

      <section className="grid md:grid-cols-2 gap-x-7 gap-y-1">
        <TextInput label="Nome da empresa" />

        <TextInput
          name="businessSegment"
          label="Especialidade do restaurante"
        />

        <TextInput label="E-mail do representante" type="email" />
      </section>
    </>
  );
};
