import React from "react";

function DisplayEmployee(props) {
  return props.employees.map((employee, index) => (
    <div key={index}>
      <h3>{`${employee.name} - ${employee.title} `}</h3>
      <img alt="employee face" src={employee.photo} />
    </div>
  ));
}
export default DisplayEmployee;
