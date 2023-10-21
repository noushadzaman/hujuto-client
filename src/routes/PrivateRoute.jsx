import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}


export default PrivateRoute;