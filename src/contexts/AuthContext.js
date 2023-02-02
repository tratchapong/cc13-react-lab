// eslint-disable-next-line react/no-typos
import {createContext, useState, useContext, useEffect} from 'react'


export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('login')){
      setIsLogin(true)
    }
  }, [])
  

  const login = () => {
    localStorage.setItem('login', '1')
    setIsLogin(true)
  }

  const logout = () => {
    localStorage.removeItem('login')
    setIsLogin(false)
  }

  return(
    <AuthContext.Provider value={{isLogin, setIsLogin, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)