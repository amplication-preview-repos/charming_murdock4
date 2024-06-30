import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";
import { PointsTitle } from "../points/PointsTitle";

export const BranchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="brand.id" reference="Brand" label="Brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="pointsItems"
          reference="Points"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PointsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
