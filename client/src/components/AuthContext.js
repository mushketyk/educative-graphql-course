import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'

const AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {
  const expiresAt = localStorage.getItem('expiresAt')
  const initValue = expiresAt && expiresAt > Date.now()
  const [isAuthenticated, setAuthenticated] = useState(initValue)

  return <AuthContext.Provider value={{isAuthenticated, setAuthenticated}}>
    {children}
  </AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}


export const useAuth = () => useContext(AuthContext)