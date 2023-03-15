import React from 'react'

const Headder = () => {
    return (
        <div className=' bg-slate-400'>
            <div className='container m-auto flex justify-between py-4'>
                <h1 className='text-xl md:text-3xl'>Weather Wizard</h1>
                <div className='flex gap-6 md:text-xl'>
                    <button>Local weather</button>
                    <button>Search Weather</button>
                </div>
            </div>
        </div>
    )
}

export default Headder
