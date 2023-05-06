export interface Location {
  _id: string;

  organizationId: string;

  name?: string;

  state: string;

  city: string;

  street: string;

  number: string;

  complement?: string;

  postalCode: string;

  createdAt: Date;

  updatedAt: Date;
}
