// eslint-disable-next-line react/no-typos
import axios from 'axios'
import {createContext, useState, useContext, useEffect} from 'react'


export const AuthContext = createContext()

const URL = "http://localhost:8000";
const putHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default function AuthContextProvider({children}) {
  const [authUser, setAuthUser] = useState(null)
  const [isLogin, setIsLogin] = useState(false)

  const getMe = () => {
    let token = localStorage.getItem('token')
    axios.get(`${URL}/me`, putHeaders(token)).then(res => {
      setAuthUser(res.data)
    })
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      getMe()
    }
  }, [])
  
  useEffect(()=> {
    setIsLogin(!!authUser)
    console.log(authUser)
  }, [authUser])

  const login = async (data) => {
    // try{
      let res = await axios.post('http://localhost:8000/login',data)
        // console.log(res.data)    
        localStorage.setItem('token', res.data)
        localStorage.setItem('login', '1')
        getMe()
    // }catch(err) {
    //   console.log(err.message)
    // }

    // }
  }

  const logout = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('token')
    // setIsLogin(false)
    setAuthUser(null)
  }

  return(
    <AuthContext.Provider value={{isLogin, setIsLogin, login, logout, authUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)