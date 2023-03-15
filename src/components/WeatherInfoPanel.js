import React from 'react'
import InfoPanelHead from './InfoPanelHead'
const WeatherInfoPanel = ({ data }) => {
    return (
        <div >
            <InfoPanelHead data={data} />
        </div >
    )
}

export default WeatherInfoPanel
