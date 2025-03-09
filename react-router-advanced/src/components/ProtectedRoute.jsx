import { Navigate } from "react-router-dom";

const useAuth = () => {
  return localStorage.getItem("auth") === "true";
};

function ProtectedRoute({ children }) {
  return useAuth() ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
