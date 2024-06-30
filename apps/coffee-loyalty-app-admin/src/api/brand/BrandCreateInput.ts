import { BranchCreateNestedManyWithoutBrandsInput } from "./BranchCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  branches?: BranchCreateNestedManyWithoutBrandsInput;
  name?: string | null;
};
