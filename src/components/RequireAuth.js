import { Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext.js'

function RequireAuth({ children }) {
  const { currentUser } = useAuth()

  return currentUser ? children : <Navigate to='/login' replace />
}

export default RequireAuth
