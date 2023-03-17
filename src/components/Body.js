import React from 'react'
import { Outlet } from 'react-router-dom'
const Body = () => {
    return (
        <div className=' min-h-screen bg-blue-300 flex flex-col items-center justify-center'>
            <Outlet />
        </div>
    )
}

export default Body
