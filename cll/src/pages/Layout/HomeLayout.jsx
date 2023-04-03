import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const HomeLayout = ({children}) => {
  return (
    <div className="w-full">
    <Navbar />
    {children}
    <Footer />
  </div>
  )
}

export default HomeLayout
