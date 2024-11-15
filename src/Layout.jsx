import React from 'react'
import Sidebar from './pages/Sidebar'
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full h-screen bg-pink-100'>
      <div  className='flex rounded-xl' >
        <Sidebar />
        <div className='flex-row w-full ml-[1px] rounded-xl'>
          <Header />
          <Outlet />
      </div>
    
      </div>
     

    </div>
  )
}

export default Layout