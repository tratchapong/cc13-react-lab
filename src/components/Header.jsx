import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Header() {
  const {isLogin, setIsLogin} = useAuth()
  const navigate = useNavigate()
  
  const thepath = [ 
    { path: '/', text: 'Home', onLogin: true , public: true},
    { path: '/product', text: 'Product', onLogin: true, public: true},
    { path: '/service', text: 'Service', onLogin: true, public: true},
    { path: '/private', text: 'Private', onLogin: true, public: false},
    { path: '/login', text: 'Login',onLogin: false, public: true },
  ]

  const hdlLogout = () => {
    setIsLogin(false)
    navigate('/')
  }
  return (
    <nav className='flex gap-3 py-2'>
      {thepath.map( el => {
        if ((isLogin && el.onLogin) || (!isLogin && el.public) )
          return <NavLink key={el.path} to={el.path}>{el.text}</NavLink>
        // if (!isLogin && el.public)  
        // return <NavLink key={el.path} to={el.path}>{el.text}</NavLink>
          return null
      }
      )}
      { isLogin && <button onClick={hdlLogout}>Logout</button>}
    </nav>

    // ------------------------------------

    // <nav className='flex gap-3 py-2'>
    //   {thepath.map( el => (
    //     <Link key={el.path} to={el.path} className= { pathname === el.path ? 'bg-lime-200' : ''}>{el.text}</Link>
    //   ))}
    // </nav>

    // ------------------------------------

    // <nav className='flex gap-3 py-2'>
    //   <Link to='/' className={ pathname ==='/' && 'bg-lime-200'}>Home</Link>
    //   <Link to='/product' className={ pathname ==='/product' && 'bg-lime-200'}>Product</Link>
    //   <Link to='/service' className={ pathname ==='/service' && 'bg-lime-200'}>Service</Link>
    //   <Link to='/login'>Login</Link>
    // </nav>
  )
}

export default Header