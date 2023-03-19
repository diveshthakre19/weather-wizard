import React from 'react'

const InfoCard = ({ name, value, image, unit }) => {
    return (
        <div className=' shadow-xl bg-pink-100-100 rounded-xl text-2xl w-40 lg:w-48 xl:w-52'>
            <p className='font-bold text-lg w-full p-4 bg-blue-300'>{name}</p>
            <div className='flex justify-between md:text-2xl lg:text-4xl items-center lg:gap-2 p-4 '>
                <img src={image} alt={value} className=" h-12 lg:h-16 " />
                <p className='text-xl md:text-2xl xl:text-3xl'>{value + unit}</p>
            </div>
        </div>
    )
}

export default InfoCard
