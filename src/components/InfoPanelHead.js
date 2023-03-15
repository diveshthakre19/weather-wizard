import React from "react";

const InfoPanelHead = ({ data }) => {
    const date = new Date(data?.dt * 1000).toDateString()
    return (
        <>
            <div className="city-section">
                <img alt="Flag" src={`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`} />
                <h2 className="name">{data?.name}</h2>
                <p>{date}</p>
                <p className="temp">{data?.main?.temp}</p>
                <p>{data?.weather?.[0]?.description}</p>
                <img alt="status-Icon" src={`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`} />
            </div>
        </>
    );
};

export default InfoPanelHead;
