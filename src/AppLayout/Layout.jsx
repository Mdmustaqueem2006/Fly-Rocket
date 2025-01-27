import React, {useState , useEffect} from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import {Outlet} from 'react-router-dom'
import { login, logout } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'

function Layout() {

    const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout;