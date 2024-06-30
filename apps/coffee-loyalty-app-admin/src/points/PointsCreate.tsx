import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BranchTitle } from "../branch/BranchTitle";
import { UserTitle } from "../user/UserTitle";

export const PointsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="branch.id" reference="Branch" label="Branch">
          <SelectInput optionText={BranchTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="points" source="points" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
