import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     if (loading) {
          return <h1 className="text-3xl">Loading!!!</h1>
     }
     if (!user?.email) {
          return <Navigate to={"/login"}></Navigate>
     }
     else {
          return children
     }

};

export default PrivateRoute;
PrivateRoute.propTypes = {
     children: PropTypes.node,
}