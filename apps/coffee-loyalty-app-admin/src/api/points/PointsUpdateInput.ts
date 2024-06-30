import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PointsUpdateInput = {
  branch?: BranchWhereUniqueInput | null;
  points?: number | null;
  user?: UserWhereUniqueInput | null;
};
