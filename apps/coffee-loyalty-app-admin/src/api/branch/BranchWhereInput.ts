import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PointsListRelationFilter } from "../points/PointsListRelationFilter";

export type BranchWhereInput = {
  brand?: BrandWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  pointsItems?: PointsListRelationFilter;
};
