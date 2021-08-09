import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({ // las prop que he pasado este componnete dde proteccion
    isAuthenticated,
    component: Component,
    ...rest // resto de props que prove router etc 
}) => {

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Redirect to="/" /> ) // no permito esescribir l autenticacion
                    : ( <Component { ...props } /> ) /* estas 2 pantallas solo si no estoy autentcado - pantallas de forms de autenticacion */
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
