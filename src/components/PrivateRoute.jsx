import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../utils/AuthContext';

const PrivateRoute = ({ children }) => {
  const { authData } = useContext(AuthContext);

  if (!authData) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
