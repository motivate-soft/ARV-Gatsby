import React from 'react'
import images from "../constants/images";
import { Link } from 'gatsby'

const helpData = [
    {
        icon: images.IC_AIRPLANE,
        text: "Airport Transfers",
    },
    {
        icon: images.IC_BOAT,
        text: "Port Transfers",
    },
    {
        icon: images.IC_COMPASS,
        text: "Private Hire",
    },
    {
        icon: images.IC_MOUNTAIN,
        text: "Long Distance",
    },
    {
        icon: images.IC_SUITCASE,
        text: "Business Meetings",
    },
    {
        icon: images.IC_VAN,
        text: "Corporate Events",
    },
];

function HelpSection() {
    return (
        <div className="bg-primary px-10 md:px-32 py-8 md:py-16 text-center relative">
            <div className="absolute right-0 left-0 mx-auto" style={{ top: -15 }}>
                <Link className="px-8 py-6 uppercase bg-yellow" to='/makebooking'>
                    Make a booking
                </Link>
            </div>

            <p className="text-3xl pt-4 md:pt-0 pb-10">
                How we can help
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 row-gap-10 col-gap-4 mx-auto">
                {
                    helpData.map((data, index) => (
                        <div className="flex flex-col justify-end" key={index} >
                            <img src={data.icon} />
                            <p className="pt-8 text-sm bottom-0">{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HelpSection;