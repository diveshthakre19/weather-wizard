import React from 'react'
import { Outlet } from 'react-router-dom'
const Body = () => {
    return (
        <div className=' min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col items-center '>
            <Outlet />
        </div>
    )
}

export default Body
