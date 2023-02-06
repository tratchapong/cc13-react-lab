// eslint-disable-next-line react/no-typos
import axios from 'axios'
import {createContext, useState, useContext, useEffect} from 'react'


export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('login')){
      setIsLogin(true)
    }
  }, [])
  

  const login = async (data) => {
    let res = await axios.post('http://localhost:8000/login',data)
    console.log(res.data)
    localStorage.setItem('token', res.data)
    localStorage.setItem('login', '1')
    setIsLogin(true)
  }

  const logout = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('token')
    setIsLogin(false)
  }

  return(
    <AuthContext.Provider value={{isLogin, setIsLogin, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)