import { PointsCreateNestedManyWithoutUsersInput } from "./PointsCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  pointsItems?: PointsCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
