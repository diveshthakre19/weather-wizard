import React from "react";

const InfoPanelHead = ({ data }) => {
    const date = new Date(data?.dt * 1000).toDateString()
    return (
        <>
            <div className="city-section  px-6 py-4 bg-slate-300 w-full flex  flex-wrap justify-between items-center">
                <div className="md:flex items-center gap-3">
                    <img alt="Flag" className="h-10 lg:h-12" src={`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`} />
                    <div>
                    </div>
                    <h2 className="md:text-4xl mb-2">{data?.name}</h2>
                    <p className="text-xl md:text-2xl">{date}</p>
                </div>

                <div className="md:flex gap-4 items-center">
                    <p className="temp text-4xl xl:text-6xl font-thin">{data?.main?.temp}°C</p>
                    <p className=" md:text-4xl capitalize">{data?.weather?.[0]?.description}</p>
                    <img alt="status-Icon" className="h-full" src={`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`} />
                </div>
            </div>
        </>
    );
};

export default InfoPanelHead;
