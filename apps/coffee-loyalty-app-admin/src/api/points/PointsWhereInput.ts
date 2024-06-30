import { BranchWhereUniqueInput } from "../branch/BranchWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PointsWhereInput = {
  branch?: BranchWhereUniqueInput;
  id?: StringFilter;
  points?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
