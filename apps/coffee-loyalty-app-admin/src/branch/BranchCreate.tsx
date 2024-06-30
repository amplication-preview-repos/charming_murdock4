import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";
import { PointsTitle } from "../points/PointsTitle";

export const BranchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
