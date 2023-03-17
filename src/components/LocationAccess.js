import React from 'react'
import locationIcon from "../assets/icons/location.png"

const LocationAccess = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={locationIcon} className="h-28 " alt="locationIcon"></img>
            <p className='text-center'>To get your Nearby Wether Update, <br /> Please share your location with us?</p>
            <button>Allow</button>

        </div>
    )
}

export default LocationAccess
