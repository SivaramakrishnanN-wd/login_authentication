import React, { Fragment } from "react";
import InputEmployee from "./InputEmployee";
import ListEmployee from "./ListEmployee";

const EmployeeDashboard = () => {
  return (
    <Fragment>
      <div className="container">
        <InputEmployee></InputEmployee>
        <ListEmployee></ListEmployee>
      </div>
    </Fragment>
  );
};

export default EmployeeDashboard;
