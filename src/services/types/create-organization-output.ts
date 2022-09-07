type CreateUserOutput = {
  userId: string;
  organizationId: string;
  auth: {
    accessToken: string;
  };
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

type CreateLocationOutput = {
  locationId: string;
  organizationId: string;
  locationName: string;
  city: string;
  neighborhood: string;
  street: string;
  state: string;
  number: string;
  postalCode: string;
  complement: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateOrganizationOutput = {
  organizationId: string;
  organizationRepresentantId: string;
  name: string;
  businessSegment: string;
  prefix: string;
  user: CreateUserOutput;
  locations: CreateLocationOutput[];
  createdAt: Date;
  updatedAt: Date;
};
