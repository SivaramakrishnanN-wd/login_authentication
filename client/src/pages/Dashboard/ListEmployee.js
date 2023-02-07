import React, { Fragment, useState, useEffect } from "react";
import EditEmployee from "./EditEmployee";
import "./listEmloyee.css";

function ListEmployee() {
  const [employees, setEmployee] = useState([]);
  const employeeDelete = async (id) => {
    try {
      const deleteEmployee = await fetch(
        `http://localhost:5000/employees/${id}`,
        {
          method: "DELETE",
        }
      );
      setEmployee(employees.filter((employees) => employees.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getEmployee = async () => {
    try {
      const response = await fetch("http://localhost:5000/employees");
      const jsonData = await response.json();
      setEmployee(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr className="heading">
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((empl) => {
            return (
              <tr key={empl.todo_id}>
                <td>{empl.name}</td>
                <td>{empl.position}</td>
                <td>{empl.salary}</td>
                <td>
                  <EditEmployee empl={empl} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => employeeDelete(empl.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListEmployee;
