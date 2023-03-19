import React from 'react'

const Shimmer = (props) => {
    return (
        <div className="animate-pulse w-3/5 h-[70vh] flex flex-col space-y-4 rounded-xl bg-slate-200">
            {props.allow}
        </div>
    );
}

export default Shimmer
