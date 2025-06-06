import { checkUser } from '@/lib/checkUser'
import React from 'react'

const MainLayout = async ({children}) => {
    await checkUser();
  return (
    <div className='container mx-auto my-32'>
      {children}
    </div>
  )
}

export default MainLayout
