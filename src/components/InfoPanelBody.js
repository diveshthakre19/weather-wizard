import React from 'react'
import InfoCard from './InfoCard'

const InfoPanelBody = ({ data }) => {


    let minTemp = data?.main?.temp_min
    let maxTemp = data?.main?.temp_max
    let pressure = data?.main?.pressure
    let visibility = data?.visibility
    let wind = data?.wind?.speed
    let clouds = data?.clouds?.all
    console.log(minTemp, maxTemp, pressure, visibility, wind, clouds)
    console.log(data)


    return (
        <div className='flex gap-1'>

            <InfoCard image={null} value={data?.visibility} name={"Visibility"} unit={"m"} />
            <InfoCard image={null} value={data?.wind?.speed} name={"Min-Temp"} unit={"m/s"} />
            <InfoCard image={null} value={data?.main?.temp_min} name={"Min-Temp"} unit={"°C"} />
            <InfoCard image={null} value={data?.main?.temp_max} name={"Max-Temp"} unit={"°C"} />
            <InfoCard image={null} value={data?.main?.pressure} name={"pressure"} unit={"mb"} />
            <InfoCard image={null} value={data?.main?.humidity} name={"Humidity"} unit={"%"} />
            <InfoCard image={null} value={data?.clouds?.all} name={"Min-Temp"} unit={"%"} />

        </div>
    )
}

export default InfoPanelBody
