// eslint-disable-next-line react/no-typos
import {createContext, useState, useContext} from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [isLogin, setIsLogin] = useState(false)

  return(
    <AuthContext.Provider value={{isLogin, setIsLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)