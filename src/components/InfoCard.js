import React from 'react'

const InfoCard = ({ name, value, image, unit }) => {
    return (
        <div className='border-2 border-violet-400'>
            <img src={image} alt={value} />
            <p>{name}</p>
            <p>{value + unit}</p>

        </div>
    )
}

export default InfoCard
