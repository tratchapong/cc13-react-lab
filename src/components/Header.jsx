import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Header() {
  // const {pathname} = useLocation()
  const {isLogin} = useAuth()
  console.log(isLogin)
  const thepath = [ 
    { path: '/', text: 'Home', onLogin: true , noLogin: true},
    { path: '/product', text: 'Product', onLogin: true, noLogin: true},
    { path: '/service', text: 'Service', onLogin: true, noLogin: true},
    { path: '/private', text: 'Private', onLogin: true, noLogin: false},
    { path: '/login', text: 'Login',onLogin: false, noLogin: true },
  ]
  return (
    <nav className='flex gap-3 py-2'>
      {thepath.map( el => (
        (!isLogin || el.onLogin) && <NavLink key={el.path} to={el.path}>{el.text}</NavLink>
      ))}
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