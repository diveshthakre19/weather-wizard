
import React, { useState, useEffect } from 'react';
import LocationAccess from './LocationAccess';
import Shimmer from './Shimmer';
import WeatherInfoPanel from "./WeatherInfoPanel"
const API_KEY = process.env.REACT_APP_API_KEY


const NearbyWeather = () => {
    const [weatherData, setweatherData] = useState(null)
    const [coordinates, setcoordinates] = useState({})

    async function fetchWeatherData(coords) {
        const { lat, lon } = coords
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error);
        }
    }

    function getCoordinates() {
        const localCoordinates = sessionStorage.getItem("coordinates")
        if (!localCoordinates) {

            function grantLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                    alert("geolocation unsupported");
                }
            }
            function showPosition(position) {
                const userCoordinates = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                };
                sessionStorage.setItem("coordinates", JSON.stringify(userCoordinates));
                setcoordinates(userCoordinates)
            }
            grantLocation()
        }
        else {
            let userlocation = JSON.parse(localCoordinates)
            setcoordinates(userlocation)
        }
    }

    useEffect(() => {
        getCoordinates()
    }, [])

    useEffect(() => {
        if (coordinates.lat && coordinates.lon) {
            fetchWeatherData(coordinates).then(data => {
                setweatherData(data)
            })
        }
    }, [coordinates])

    return ((!weatherData) ? <Shimmer allow={<LocationAccess />} /> :

        <WeatherInfoPanel data={weatherData} />

    )
}

export default NearbyWeather

