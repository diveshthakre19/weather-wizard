import React from 'react'

const Shimmer = (props) => {
    return (
        <div className="animate-pulse w-3/4 h-[70vh] mt-6 flex flex-col justify-center items-center text-xl space-y-4 rounded-xl bg-slate-200">
            {props.allow}
        </div>
    );
}

export default Shimmer
