import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { BranchTitle } from "../branch/BranchTitle";
import { UserTitle } from "../user/UserTitle";

export const PointsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="branch.id" reference="Branch" label="Branch">
          <SelectInput optionText={BranchTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="points" source="points" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
