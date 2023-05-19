import { FunctionComponent, FormEvent, useState } from "react";
import { Button } from "@components/Button";
import { TextInput } from "@components/TextInput";
import { useCreateOrganization } from "@api/organization/hooks/useCreateOrganization";

export const CreateOrganization: FunctionComponent = () => {
  const [orgName, setOrgName] = useState("");
  const [businessSegment, setBusinessSegment] = useState("");
  const [representantEmail, setRepresentantEmail] = useState("");

  const { mutate: createOrganizationMutation, isLoading } =
    useCreateOrganization({});

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createOrganizationMutation({
      name: orgName,
      businessSegment,
      representantEmail,
    });
  };

  return (
    <div className="bg-slate-800 min-h-screen flex justify-center items-center py-10">
      <main className="bg-slate-50 flex flex-col w-full md:w-[70%] md:h-[80%] rounded px-10 py-5">
        <h1 className="font-bold text-2xl pb-5 text-center">
          Cadastrar empresa
        </h1>

        <form onSubmit={handleFormSubmit}>
          <h2 className="font-bold text-xl pb-4">Dados da empresa</h2>
          <section className="grid md:grid-cols-2 gap-x-7 gap-y-3">
            <TextInput
              label="Nome da empresa"
              placeholder="Cazé Lanches"
              onChange={(event) => setOrgName(event.target.value)}
            />

            <TextInput
              name="businessSegment"
              placeholder="Comida japonesa"
              label="Especialidade do restaurante"
              onChange={(event) => setBusinessSegment(event.target.value)}
            />

            <TextInput
              type="email"
              placeholder="exemplo@chefin.com"
              label="E-mail do representante"
              onChange={(event) => setRepresentantEmail(event.target.value)}
            />
          </section>

          <Button className="mt-6" type="submit">
            Enviar convite
          </Button>
        </form>
      </main>
    </div>
  );
};
