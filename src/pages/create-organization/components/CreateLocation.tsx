import { FunctionComponent, useMemo, useState } from "react";
import { TextInput } from "@components/TextInput";
import { Button } from "@components/Button";

export const CreateLocation: FunctionComponent = () => {
  // Botao de + => renderiza uma nova seção de Location
  // A seção de Location pode ser minimizável, exibindo somente o nome da unidade

  const [locations, setLocations] = useState([]);

  return (
    <div className="py-3">
      <h2 className="font-bold text-lg">Dados das unidades</h2>

      <Location />

      <Button>+ Adicionar unidade</Button>
    </div>
  );
};

const Location: FunctionComponent = () => {
  const [locationName, setLocationName] = useState();

  // name: ""
  // state: ""
  // city: ""
  // street: ""
  // number: ""
  // complement: ""
  // postalCode: ""

  return (
    <section className="py-4">
      <fieldset className="grid md:grid-cols-2 gap-x-6 gap-y-1">
        <TextInput label="Nome da unidade" />
        <TextInput label="CEP" />
        <TextInput label="Estado" />
        <TextInput label="Cidade" />
        <TextInput label="Rua" />
        <TextInput label="Número" />
        <TextInput label="Complemento" />
      </fieldset>
    </section>
  );
};
