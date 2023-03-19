import React from 'react'
import InfoPanelBody from './InfoPanelBody'
import InfoPanelHead from './InfoPanelHead'
const WeatherInfoPanel = ({ data }) => {
    return (
        <div className='w-3/5 h-[70vh] flex flex-col space-y-4 rounded-xl bg-slate-200 items-center' >
            <InfoPanelHead data={data} />
            <InfoPanelBody data={data} />
        </div >
    )
}

export default WeatherInfoPanel
