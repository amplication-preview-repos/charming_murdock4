import { Branch } from "../branch/Branch";
import { User } from "../user/User";

export type Points = {
  branch?: Branch | null;
  createdAt: Date;
  id: string;
  points: number | null;
  updatedAt: Date;
  user?: User | null;
};
