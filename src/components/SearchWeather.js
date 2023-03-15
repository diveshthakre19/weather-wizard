import React from 'react'
import WeatherInfoPanel from './WeatherInfoPanel'


const SearchWeather = () => {
    return (
        <>
            <form className='my-4'>
                <input className='py-2 px-4 w-96' placeholder='Enter city for wether Update......' /> <button type='submit' className='p-2 bg-blue-400'>🔍</button>
            </form>
            <WeatherInfoPanel />
        </>
    )
}

export default SearchWeather
