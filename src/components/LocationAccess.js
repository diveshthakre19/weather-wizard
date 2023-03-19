import React from 'react'
import locationIcon from "../assets/icons/location.png"

const LocationAccess = () => {
    return (
        <div className='flex flex-col h-[70vh] justify-center items-center'>
            <img src={locationIcon} className="h-40 " alt="locationIcon"></img>
            <p className='text-center text-2xl'>To get your Nearby Wether Update, <br /> Please share your location with us</p>
        </div>
    )
}

export default LocationAccess
