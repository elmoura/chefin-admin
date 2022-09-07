import axios, { AxiosInstance } from "axios";
import { CreateOrganizationInput } from "./types/create-organization-input";
import { CreateOrganizationOutput } from "./types/create-organization-output";

export class OrganizationsApiService {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: import.meta.env.ORGANIZATIONS_API_URL,
    });
  }

  createOrganization = async (
    input: CreateOrganizationInput
  ): Promise<CreateOrganizationOutput> => {
    const response = await this.httpClient.post("/organizations", input);

    return response.data;
  };
}
