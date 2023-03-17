import React from 'react'

const InfoCard = ({ name, value, image, unit }) => {
    return (
        <div className='border-2 border-violet-400'>
            <p>{name}</p>
            <img src={image} alt={value} className="h-24" />
            <p>{value + unit}</p>

        </div>
    )
}

export default InfoCard
