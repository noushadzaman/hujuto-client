/* eslint-disable  */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import MoonLoader from "react-spinners/MoonLoader";
import { useState } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading: userLoading } = useContext(AuthContext);
    const location = useLocation();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#d6cab8");

    if (userLoading) {
        return <MoonLoader
            color={color}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}


export default PrivateRoute;