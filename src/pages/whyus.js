import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import images from "../constants/images";
import ImageGallery from "../components/image_gallery"
import HelpSection from "../components/help_section"

const pageData = {
    hasNavBar: true,
    hasBgSection: true,
    bgImg: images.BG_WHYUS,
    title: "Why choose ARV?",
    subTitle: "Unrivalled chauffeur-driven experience",
}

const galleryData = [
    {
        img: images.IMG_HOME_TH_4,
        text: "Airports"
    },
    {
        img: images.IMG_HOME_TH_5,
        text: "Train Stations"
    },
    {
        img: images.IMG_HOME_TH_6,
        text: "Ports"
    },
]

function WhyUsPage() {
    return (
      <Layout pageData={pageData}>
        <SEO title="Why Us" />
        <ImageGallery data={galleryData} />

        <div className="bg-primary px-10 md:px-32 py-8 md:py-16">
          <p className="text-3xl pb-6">On-Demand services</p>
          <div className="flex text-sm leading-loose">
            <p className="w-1/2 pr-4 md:pr-10">
              Outstanding executive services on demand, vehicles that meet any
              requirements, drivers ready to help with any request.
              <br />
              <br />
              Our Executive Services are delivered by our attention to quality,
              service and reliability in executive transportation. Especially in
              terms of assisting a client with an option that meets their exact
              expectations and requirement.
            </p>
            <p className="w-1/2 pl-4 md:pl-10">
              Not only have we just upgraded our executive vehicle range, but we
              have the drivers and logistics in place to offer you with more
              than just a transfer. We offer you with reliability as standard,
              excellent service as an included feature and customer satisfaction
              of the highest level.
              <br />
              <br />
              We offer airport chauffeur services across several of London’s
              major airports, the UK docks for cruises and sightseeing tours.
              Our luxury cars will pick you up or drop you off at a location of
              your choosing with plenty of time to spare. We go above and beyond
              to make sure you’re getting the best-chauffeured car service
              possible.
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


export default WhyUsPage;

