import React from 'react'
import InfoPanelBody from './InfoPanelBody'
import InfoPanelHead from './InfoPanelHead'
const WeatherInfoPanel = ({ data }) => {
    return (
        <div className=' mt-8 flex flex-col container w-[100vw] md:w-[80vw] space-y-4 rounded-xl shadow-2xl bg-slate-200 items-center' >
            <InfoPanelHead data={data} />
            <InfoPanelBody data={data} />
        </div >
    )
}

export default WeatherInfoPanel
