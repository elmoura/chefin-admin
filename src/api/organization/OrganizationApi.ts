import { graphQl } from "@api/api";
import {
  CreateOrganizationInput,
  CreateOrganizationOutput,
} from "./dto/CreateOrganizationDto";

const CREATE_ORG_MUTATION = `mutation CreateOrg($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    _id
    name
    businessSegment
    businessRepresentantId
  }
}`;

export const createOrganization = async (
  input: CreateOrganizationInput
): Promise<CreateOrganizationOutput> => {
  const response = await graphQl<
    { input: CreateOrganizationInput },
    CreateOrganizationOutput
  >(CREATE_ORG_MUTATION, { input });

  console.log(response.status, response.data);

  return response.data;
};
