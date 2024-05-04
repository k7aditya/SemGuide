import PropTypes from 'prop-types';
import React, { useMemo, useCallback } from 'react';
 
const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem('token');
  const initialLoggedInState = storedToken !== null && storedToken !== '';

  const [isLoggedIn, setIsLoggedIn] = React.useState(initialLoggedInState);

  const loginHandler = useCallback((token) => {
    // localStorage.setItem('token', token);
    setIsLoggedIn(true);
  }, []);

  const logoutHandler = useCallback(() => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }, []);

  const authContext = useMemo(() => ({
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }), [isLoggedIn, loginHandler, logoutHandler]);

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;

