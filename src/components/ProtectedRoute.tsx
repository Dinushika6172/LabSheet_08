import React from "react";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  return isAuthenticated ? <>{children}</> : <div>Please Log In</div>;
};

export default ProtectedRoute;
