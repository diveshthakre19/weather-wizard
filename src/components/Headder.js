import React from 'react'
import { Link, useLocation } from "react-router-dom"

const Headder = () => {
    const Location = useLocation()
    const currentPath = Location.pathname
    return (
        <div className=' bg-slate-400'>
            <div className='container m-auto flex justify-between py-4'>
                <h1 className='text-xl md:text-3xl'>Weather Wizard</h1>
                <div className='flex gap-6 md:text-xl'>
                    <button className={`p-2 ${(currentPath === "/") ? "bg-slate-100" : null}`}><Link to="/">Nearby weather</Link></button>
                    <button className={`p-2 ${(currentPath === "/search") ? "bg-slate-100" : null}`}><Link to="/search">Search Weather</Link></button>
                </div>
            </div>
        </div >
    )
}

export default Headder
