import { useMutation, MutateOptions, UseMutationResult } from "react-query";
import {
  CreateOrganizationInput,
  CreateOrganizationOutput,
} from "../dto/CreateOrganizationDto";
import { createOrganization } from "../OrganizationApi";

type Options = {
  onError?: (error: any) => void;
  onSuccess?: (response: CreateOrganizationOutput) => void;
};

export const useCreateOrganization = (options: Options = {}) => {
  return useMutation(
    (orgInput: CreateOrganizationInput) => createOrganization(orgInput),
    options
  );
};
