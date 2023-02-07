import React, { Fragment, useState } from "react";

function EditEmployee({ empl }) {
  const [name, setName] = useState(empl.name);
  const [position, setPosition] = useState(empl.position);
  const [salary, setSalary] = useState(empl.salary);

  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      const body = { name, position, salary };
      const response = await fetch(
        `http://localhost:5000/employees/${empl.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${empl.todo_id}`}
        z
      >
        Edit
      </button>

      <div class="modal" id={`id${empl.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Employee Details </h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body d-flex">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="text"
                className="form-control"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              ></input>
              <input
                type="number"
                className="form-control"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              ></input>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateEmployee(e)}
              >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default EditEmployee;
