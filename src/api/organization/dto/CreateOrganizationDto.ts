import { Organization } from "@models/organization";

export interface CreateOrganizationInput
  extends Omit<
    Organization,
    "_id" | "createdAt" | "updatedAt" | "locations" | "businessRepresentantId"
  > {
  representantEmail: string;
}

export interface CreateOrganizationOutput
  extends Omit<Organization, "locations"> {}
