import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { PointsUpdateManyWithoutBranchesInput } from "./PointsUpdateManyWithoutBranchesInput";

export type BranchUpdateInput = {
  brand?: BrandWhereUniqueInput | null;
  name?: string | null;
  pointsItems?: PointsUpdateManyWithoutBranchesInput;
};
