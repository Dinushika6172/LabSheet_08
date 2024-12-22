import React, { useState } from "react";
import { Employee } from "../App";
import { useNavigate } from "react-router-dom";

interface ListEmployeeProps {
  employees: Employee[];
  addEmployee: (name: string) => void;
  setIsAuthenticated: (auth: boolean) => void;
}

const ListEmployeeComponent: React.FC<ListEmployeeProps> = ({
  employees,
  addEmployee,
  setIsAuthenticated,
}) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    if (name.trim() === "") {
      alert("Employee name cannot be empty!");
      return;
    }
    addEmployee(name);
    setName("");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found. Add an employee!</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.id}. {employee.name}
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "200px" }}
        />
        <button onClick={handleAddEmployee} style={{ padding: "8px 16px" }}>
          Add Employee
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
