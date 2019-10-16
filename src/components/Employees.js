import React from "react";

function DisplayEmployee(props) {
  return props.employees.map((employee, index) => (
    <div key={index}>
      <div>
        <h3>{`${employee.name} - ${employee.title} `}</h3>
      </div>
      <div>
        <img alt="employee face" src={employee.photo} />
      </div>
    </div>
  ));
}
export default DisplayEmployee;
