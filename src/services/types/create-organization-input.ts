export type CreateLocationInput = {
  locationName: string;
  city: string;
  neighborhood: string;
  street: string;
  state: string;
  number: string;
  postalCode: string;
  complement: string;
};

type CreateUserInput = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export type CreateOrganizationInput = {
  name: string;
  businessSegment: string;
  prefix: string;
  user: CreateUserInput;
  locations: CreateLocationInput[];
};
