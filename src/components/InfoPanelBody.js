import React from 'react'
import InfoCard from './InfoCard'
import cloudIcon from "../assets/icons/cloud.png"
import humidityIcon from "../assets/icons/humidity.png"
import minTempIcon from "../assets/icons/minTemp.png"
import TempIcon from "../assets/icons/temp.png"
import visibilityIcon from "../assets/icons/visibility.png"
import pressureIcon from "../assets/icons/pressure.png"
import windIcon from "../assets/icons/wind.png"
// import cloudIcon from "../assets/icons/cloud.png"



const InfoPanelBody = ({ data }) => {
    return (
        <div className='flex  flex-wrap justify-center  py-4 gap-4 '>

            <InfoCard image={visibilityIcon} value={data?.visibility} name={"Visibility"} unit={"m"} />
            <InfoCard image={windIcon} value={data?.wind?.speed} name={"Min-Temp"} unit={"m/s"} />
            <InfoCard image={minTempIcon} value={data?.main?.temp_min} name={"Min-Temp"} unit={"°C"} />
            <InfoCard image={TempIcon} value={data?.main?.temp_max} name={"Max-Temp"} unit={"°C"} />
            <InfoCard image={pressureIcon} value={data?.main?.pressure} name={"pressure"} unit={"mb"} />
            <InfoCard image={humidityIcon} value={data?.main?.humidity} name={"Humidity"} unit={"%"} />
            <InfoCard image={cloudIcon} value={data?.clouds?.all} name={"Clouds"} unit={"%"} />
            <InfoCard image={cloudIcon} value={data?.clouds?.all} name={"Clouds"} unit={"%"} />


        </div>
    )
}

export default InfoPanelBody
