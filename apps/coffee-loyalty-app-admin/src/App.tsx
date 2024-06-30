import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BrandList } from "./brand/BrandList";
import { BrandCreate } from "./brand/BrandCreate";
import { BrandEdit } from "./brand/BrandEdit";
import { BrandShow } from "./brand/BrandShow";
import { PointsList } from "./points/PointsList";
import { PointsCreate } from "./points/PointsCreate";
import { PointsEdit } from "./points/PointsEdit";
import { PointsShow } from "./points/PointsShow";
import { BranchList } from "./branch/BranchList";
import { BranchCreate } from "./branch/BranchCreate";
import { BranchEdit } from "./branch/BranchEdit";
import { BranchShow } from "./branch/BranchShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CoffeeLoyaltyApp"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Brand"
          list={BrandList}
          edit={BrandEdit}
          create={BrandCreate}
          show={BrandShow}
        />
        <Resource
          name="Points"
          list={PointsList}
          edit={PointsEdit}
          create={PointsCreate}
          show={PointsShow}
        />
        <Resource
          name="Branch"
          list={BranchList}
          edit={BranchEdit}
          create={BranchCreate}
          show={BranchShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
