import React from 'react'

const InfoCard = ({ name, value, image, unit }) => {
    return (
        <div className=' shadow-xl bg-pink-100-100 rounded-xl text-2xl w-44 md:w-64'>
            <p className='font-bold text-lg w-full p-4 bg-blue-300'>{name}</p>
            <div className='flex justify-between md:text-4xl items-center gap-2 p-4 '>
                <img src={image} alt={value} className=" h-12 md:h-24 " />
                <p>{value + unit}</p>
            </div>
        </div>
    )
}

export default InfoCard
