import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

export interface Employee {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (name: string) => {
    const newEmployee = { id: employees.length + 1, name };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ListEmployeeComponent
                employees={employees}
                addEmployee={addEmployee}
                setIsAuthenticated={setIsAuthenticated}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
