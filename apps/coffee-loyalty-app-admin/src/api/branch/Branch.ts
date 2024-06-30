import { Brand } from "../brand/Brand";
import { Points } from "../points/Points";

export type Branch = {
  brand?: Brand | null;
  createdAt: Date;
  id: string;
  name: string | null;
  pointsItems?: Array<Points>;
  updatedAt: Date;
};
