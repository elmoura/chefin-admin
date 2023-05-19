import { FunctionComponent, useMemo, useState } from "react";
import { TextInput } from "@components/TextInput";
import { Button } from "@components/Button";
import { Location } from "@models/organization";

export const CreateLocation: FunctionComponent = () => {
  return (
    <div className="py-3">
      <h2 className="font-bold text-lg pb-5">Dados das unidades</h2>

      {/* Map location */}
      <Location />

      <div className="pt-4">
        <Button>+ Adicionar unidade</Button>
      </div>
    </div>
  );
};

const Location: FunctionComponent = () => {
  const {} = useState<Location>();

  // name: ""
  // state: ""
  // city: ""
  // street: ""
  // number: ""
  // complement: ""
  // postalCode: ""

  // defaultTitle || name

  return (
    <details className="py-4 px-6 border border-gray-400 rounded">
      <summary className="text-lg font-bold">Oie</summary>

      <fieldset className="grid md:grid-cols-2 gap-x-6 gap-y-1">
        <TextInput label="Nome da unidade" />
        <TextInput label="CEP" />
        <TextInput label="Estado" />
        <TextInput label="Cidade" />
        <TextInput label="Rua" />
        <TextInput label="Número" />
        <TextInput label="Complemento" />
      </fieldset>
    </details>
  );
};
