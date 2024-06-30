import { Branch } from "../branch/Branch";

export type Brand = {
  branches?: Array<Branch>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
