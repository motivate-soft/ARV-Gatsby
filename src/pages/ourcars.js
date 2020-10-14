import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import images from "../constants/images";
import HelpSection from "../components/help_section"

import M1 from "../images/ME220.png";
import M2 from "../images/MS350.png";
import M3 from "../images/MVITO.png";

const pageData = {
    hasNavBar: true,
    hasBgSection: true,
    bgImg: images.BG_WHYUS,
    title: "Our Cars",
    subTitle: "Prestige cars for VIP clients",
}

function OurCarsPage() {
    return (
      <Layout pageData={pageData}>
        <SEO title="Our cars" />

        <div className="bg-primary px-10 md:px-32 py-8 md:py-16">
        <p className="text-3xl pb-6">MERCEDES E-CLASS E220D</p>
          <div className="flex text-sm leading-loose">
            <p className="w-1/2 pr-4 md:pr-10">
              A leader in Exectuive travel, the E-Class offer comfort and connectivity features to allow you to work on the move.
            </p>
            <p className="w-1/2 pl-4 md:pl-10">
              <img src={M1}></img>
            </p>
          </div>
        </div>

        <div className="bg-primary px-10 md:px-32 py-8 md:py-16">
        <p className="text-3xl pb-6">MERCEDES S-CLASS S350</p>
          <div className="flex text-sm leading-loose">
            <p className="w-1/2 pr-4 md:pr-10">
              The S-Class has always been everything a luxury limousine should be, combining all the elements that matter – technology, luxury and comfort – to another level.
            </p>
            <p className="w-1/2 pl-4 md:pl-10">
              <img src={M2}></img>
            </p>
          </div>
        </div>

        <div className="bg-primary px-10 md:px-32 py-8 md:py-16">
        <p className="text-3xl pb-6">MERCEDES VITO 8+1 SEATS</p>
          <div className="flex text-sm leading-loose">
            <p className="w-1/2 pr-4 md:pr-10">
              Looking to accomodate more in style. Our Mercedes Vito is the perfect way to travel in style &amp; comfort.
            </p>
            <p className="w-1/2 pl-4 md:pl-10">
              <img src={M3}></img>
            </p>
          </div>
        </div>

        <div className="flex justify-center bg-grey text-center py-8">
          <div className="w-full md:w-1/2 px-10">
            <p className="text-3xl pb-6">Our Rates</p>
            <p className="pb-8">
              Prices are estimated examples of fares. For accurate quotes please
              use our booking system.
            </p>
            <div className="text-left w-full mx-4 mb-16 leading-loose">
              <span className="mr-24">By mile</span>
              <span>£1.30</span>
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Collection</th>
                    <th>London</th>
                    <th>Surrey</th>
                    <th>Hampshire</th>
                    <th>Berkshire</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LHR</td>
                    <td>£24.00</td>
                    <td>£19.80</td>
                    <td>£72.00</td>
                    <td>£49.50</td>
                  </tr>
                  <tr>
                    <td>LGW</td>
                    <td>£54.00</td>
                    <td>£49.50</td>
                    <td>£103.00</td>
                    <td>£90.00</td>
                  </tr>
                  <tr>
                    <td>STN</td>
                    <td>£54.00</td>
                    <td>£103.00</td>
                    <td>£148.00</td>
                    <td>£125.50</td>
                  </tr>
                  <tr>
                    <td>LTN</td>
                    <td>£45.00</td>
                    <td>£61.00</td>
                    <td>£110.00</td>
                    <td>£88.00</td>
                  </tr>
                  <tr>
                    <td>LCY</td>
                    <td>£11.00</td>
                    <td>£52.00</td>
                    <td>£100.50</td>
                    <td>£79.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <HelpSection />
      </Layout>
    );
}


export default OurCarsPage;

