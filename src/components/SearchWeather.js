import React, { useState } from 'react'
import Shimmer from './Shimmer'
import WeatherInfoPanel from './WeatherInfoPanel'
const API_KEY = process.env.REACT_APP_API_KEY

const SearchWeather = () => {

    const [city, setCity] = useState(false)
    const [wetherData, setWeatherData] = useState(false)

    async function fetchWetherInfo(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await response.json()
            setWeatherData(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className='my-4'>
                <input onChange={(e) => { setCity(e.target.value) }} className='py-2 px-4 w-64 md:w-96' placeholder='Enter city for wether Update......' /> <button onClick={() => {
                    fetchWetherInfo(city)
                }} type='submit' className='p-2 bg-blue-400'>🔍</button>
            </form>

            {wetherData?.name ? <WeatherInfoPanel data={wetherData} /> : ((!wetherData?.message) ? <Shimmer /> : <Shimmer allow={wetherData?.message} />)}

        </>
    )
}

export default SearchWeather
