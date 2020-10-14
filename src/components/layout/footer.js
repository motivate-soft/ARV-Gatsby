
import React from "react";
import images from "../../constants/images";
import { Link } from 'gatsby'
import { Location } from '@reach/router'

function Footer() {
    return (
        <footer>
            <div className="bg-second flex justify-between font-lato-regular text-sm px-10 md:px-32 py-8">
                <div className="flex my-auto">
                    <Link to="/" className="my-auto">
                        <img src={images.IC_APP_BOTTOM} />
                    </Link>
                    <span className="text-white text-xl font-medium ml-6 hidden md:block">International Transport</span>
                </div>
                
                <div className="flex float-right">
                    <button className="mr-6" >
                        <img src={images.IC_LINKEDIN} className="object-none hidden" />
                    </button>
                    <button className="mr-6" >
                        <img src={images.IC_INST} className="object-none hidden" />
                    </button>
                    <button>
                        <img src={images.IC_FB} className="object-none" />
                    </button>
                </div>
            </div>
            <div className="bg-third py-6 text-center mx-auto">

                <Location>
                    {({ location }) => {

                        const lastPos = location.pathname.lastIndexOf('/');
                        const len = location.pathname.length;
                        const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

                        return (
                            <div className="flex align-middle">
                                <nav className="mx-auto flex md:items-center w-full pl-8 justify-center">
                                    {[
                                        {
                                            route: `/whyus`,
                                            title: `why us`,
                                        },
                                        {
                                            route: `/destinations`,
                                            title: `destinations`,
                                        },
                                        {
                                            route: `/contact`,
                                            title: `contact`,
                                        },
                                        {
                                            route: `/makebooking`,
                                            title: `Make a booking`,
                                        },
                                    ].map((link) => (
                                        <Link
                                            className={"block text-xs md:text-base uppercase te md:inline-block mr-8 text-white"
                                                + (link.route == pathName ? " underline" : " no-underline")}

                                            key={link.title}
                                            to={link.route}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        );
                    }}
                </Location>

                <div className="flex justify-center pt-16 w-full">
                    <Link className="text-white text-xs mr-2 underline" to="/">
                        Privacy Notice
                    </Link>
                    <Link className="text-white text-xs underline" to="/">
                        Cookie Policy
                    </Link>
                </div>

                <p className="text-xs text-secondary pt-2">
                    © 2020 ARV International Transport Limited. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
