import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function RedirectWhenLogin({children}) {
  const {isLogin} = useAuth()

  if (isLogin)
    return <Navigate to={'/'} />
  return children
}
