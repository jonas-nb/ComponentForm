import React from 'react'

const InfoContainer = () => {
    return (
        <div className="text-white m-auto mt-7 max-w-[320px] rounded-md bg-[#6055a5] shadow-[0_7px_1px_0px_#00000025] xl:max-w-[600px] xl:h-10 xl:w-full xl:flex xl:justify-center">
            <p className="p-5 text-center flex flex-col xl:flex-row items-center justify-center text-sm font-[300]">
                <span className="font-[700]">
                    Try it free 7 days <span className="font-[300]">then</span>
                </span>
                $20/mo. thereafter
            </p>
        </div>
    )
}

export default InfoContainer
