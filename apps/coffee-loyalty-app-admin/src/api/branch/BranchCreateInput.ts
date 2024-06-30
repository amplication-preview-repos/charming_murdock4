import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { PointsCreateNestedManyWithoutBranchesInput } from "./PointsCreateNestedManyWithoutBranchesInput";

export type BranchCreateInput = {
  brand?: BrandWhereUniqueInput | null;
  name?: string | null;
  pointsItems?: PointsCreateNestedManyWithoutBranchesInput;
};
