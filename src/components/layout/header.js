import React, { useState } from "react";
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import images from "../../constants/images";
import PropTypes from 'prop-types';

function Header({ pageData }) {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header>
      {
        pageData.hasNavBar ?
          <div className="flex flex-col md:flex-row justify-between ml-8 mr-4 md:mr-0 font-lato-regular text-sm py-4 md:py-0">
            <div className="flex my-auto w-full justify-between md:justify-start md:w-auto">
              <Link to="/" className="my-auto">
                <img src={images.IC_APP} />
              </Link>
              <span className="text-black text-xl font-medium ml-6">International Transport</span>
            </div>
            <Location>
              {({ location }) => {

                const lastPos = location.pathname.lastIndexOf('/');
                const len = location.pathname.length;
                const pathName = location.pathname.substr(0, lastPos == 0 ? len : lastPos);

                return (
                  <div className="nav-bar1 flex flex-col md:flex-row align-middle float-right pt-2 md:pt-0">
                    <div>
                      <button
                        className="flex float-right w-10 h-10 items-center px-3 py-2 mr-2 text-black border border-black rounded md:hidden"
                        onClick={() => toggleExpansion(!isExpanded)}
                      >
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Menu</title>
                          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                      </button>
                    </div>
                    <nav
                      className={`${
                        isExpanded ? `block` : `hidden`
                        } md:flex md:items-center w-full md:w-auto pl-8`}
                    >
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
                      ].map((link) => (
                        <Link
                          className={"block uppercase text-lg md:text-sm text-center md:inline-block mr-8 text-secondary py-2"
                            + (link.route == pathName ? " underline" : " no-underline")}

                          key={link.title}
                          to={link.route}
                        >
                          {link.title}
                        </Link>
                      ))}
                    </nav>

                    <Link className="hidden md:block px-8 py-6 uppercase bg-yellow" to='/makebooking'>
                      Make a booking
                    </Link>

                  </div>
                );
              }}
            </Location>
          </div>
          : ''
      }
      {
        pageData.hasBgSection ?
          <div className="relative">
            {/* preload large images */}
            <img src={images.BG_HOME} className="hidden" />
            <img src={images.BG_WHYUS} className="hidden" />
            <img src={images.BG_DEST} className="hidden" />

            <img src={pageData.bgImg} className="background1" />
            <div className="mx-10 md:mx-32 absolute" style={{ bottom: 0 }}>
              <p className={"font-lora-regular background text-3xl md:text-5xl " + (pageData.color == undefined ? "text-white" : pageData.color)}>
                {pageData.title}
              </p>
              <p className={"font-sans text-xl background md:text-4xl font-thin " + (pageData.color == undefined ? "text-white" : pageData.color)}>
                {pageData.subTitle}
              </p>
              <div className="flex pt-4 align-top">
                <Link className="px-4 md:px-8 py-2 md:py-4 uppercase bg-yellow" to='/makebooking'>
                  Make a booking
                </Link>
                <img src={images.LOGO_TRUSTPILOT} className="object-none ml-4" />
              </div>
            </div>
          </div>
          : ''
      }
    </header >
  );
}

Header.propTypes = {
  pageData: PropTypes.object.isRequired,
};


export default Header;

