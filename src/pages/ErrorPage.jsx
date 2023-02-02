import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  
  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout( ()=>{ navigate('/')}, 2000)
  },[navigate])
  return (
    <div className='text-4xl text-red-600'>Some thing Wrong with this endpoint</div>
  )
}

export default ErrorPage