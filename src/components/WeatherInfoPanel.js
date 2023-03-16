import React from 'react'
import InfoPanelBody from './InfoPanelBody'
import InfoPanelHead from './InfoPanelHead'
const WeatherInfoPanel = ({ data }) => {
    return (
        <div >
            <InfoPanelHead data={data} />
            <InfoPanelBody data={data} />
        </div >
    )
}

export default WeatherInfoPanel
