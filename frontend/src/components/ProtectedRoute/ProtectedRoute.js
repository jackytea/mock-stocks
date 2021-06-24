import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <Route {...rest} render={({ location }) => {
      return user?.result
        ? children
        : <Redirect to={{
          pathname: '/auth',
          state: { from: location }
        }}
        />
    }} />
  )
}


export default ProtectedRoute;