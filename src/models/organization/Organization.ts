import { Location } from "./Location";

export interface Organization {
  _id: string;

  name: string;

  businessSegment: string;

  businessRepresentantId?: string;

  locations?: Location[];

  createdAt: Date;

  updatedAt: Date;
}
