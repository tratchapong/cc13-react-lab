import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function ProtectedRoute({children}) {
  const {isLogin} = useAuth()
  if (!isLogin)
    return <Navigate to={'/login'} />
  return children
}
