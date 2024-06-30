import { BranchListRelationFilter } from "../branch/BranchListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BrandWhereInput = {
  branches?: BranchListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
