import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Header() {
  // const {pathname} = useLocation()
  const thepath = [ 
    { path: '/', text: 'Home'},
    { path: '/product', text: 'Product'},
    { path: '/service', text: 'Service'},
    { path: '/login', text: 'Login'},
  ]
  return (
    <nav className='flex gap-3 py-2'>
      {thepath.map( el => (
        <NavLink key={el.path} to={el.path}>{el.text}</NavLink>
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