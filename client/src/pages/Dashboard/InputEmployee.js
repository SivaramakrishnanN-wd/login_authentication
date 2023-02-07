import React, { Fragment, useState } from "react";

function InputEmployee() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, position, salary };
      const response = await fetch("http://localhost:5000/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  const locationChange = () => {
    window.location = "/register";
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Employees Dashboard</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required="required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          className="form-control"
          value={position}
          required="required"
          placeholder="Position"
          onChange={(e) => setPosition(e.target.value)}
        ></input>
        <input
          type="text"
          className="form-control"
          value={salary}
          required="required"
          placeholder="Salary"
          onChange={(e) => setSalary(e.target.value)}
        ></input>
        <button className="btn btn-success" onClick={locationChange}>
          Add
        </button>
      </form>
    </Fragment>
  );
}
export default InputEmployee;
