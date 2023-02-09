import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function RedirectWhenLogin({children}) {
  const {authUser} = useAuth()

  if (authUser)
    return <Navigate to={'/'} />
  return children
}
