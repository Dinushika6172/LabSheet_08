import React, { useState } from "react";

interface AddEmployeeProps {
  addEmployee: (name: string) => void;
}

const AddEmployeeComponent: React.FC<AddEmployeeProps> = ({ addEmployee }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Employee name cannot be empty!");
      return;
    }
    addEmployee(name);
    setName("");
    alert("Employee added successfully!");
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeComponent;
