import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import images from "../constants/images";
import ImageGallery from "../components/image_gallery";

const pageData = {
  hasNavBar: true,
  hasBgSection: true,
  bgImg: images.BG_HOME,
  title: "Executive Transfers",
  subTitle: "Focused on you",
};

const galleryData = [
  {
    img: images.IMG_HOME_TH_1,
    text: "Why ARV?",
    link: "/whyus",
  },
  {
    img: images.IMG_HOME_TH_2,
    text: "Our Cars",
    link: "/ourcars",
  },
  {
    img: images.IMG_HOME_TH_3,
	text: "Destinations",
	link: "/destinations",
  },
];

const galleryData1 = [
  {
    img: images.IMG_HOME_TH_4,
    text: "Airports",
  },
  {
    img: images.IMG_HOME_TH_5,
    text: "Train Stations",
  },
  {
    img: images.IMG_HOME_TH_6,
    text: "Ports",
  },
];

function IndexPage() {
  return (
    <Layout pageData={pageData}>
      <SEO 
      title="Executive Transport Surrey | Private Hire | Chauffeur Car Service"
      description="An executive private hire, airport transfer and chauffeur company you can trust. Providing transport for airports, coporate events, special occasions &amp; much more"
      
      />
      <ImageGallery data={galleryData} />

      <div className="bg-primary px-10 md:px-32 py-8 md:py-16">
        <div className="bg-exec-transfers">
          <div className="w-full md:w-1/2">
            <p className="text-3xl pb-6">Executive Transfers</p>
            <p className="text-sm">
              ARV International Transport are renowned for quality, reliability
              and premium road transportation service. We are trusted by
              Government agencies and company officials to move leaders,
              executives and VIPs reliably and in absolute comfort.
              <br />
              <br />
              Our Executive Transfer services are delivered by our trusted
              drivers, who adhere to our strict COVID-19 policies for the safety
              of our passengers. We inspire to offer the pinnacle of quality,
              service and reliability in ground transportation for an unrivalled
              chauffeur-driven experience.
              <br />
              <br />
              Trust us to deliver a world-class service, capable of meeting the
              most demanding corporate requirements across the UK.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-grey text-center">
        <p className="text-3xl py-6">Popular Transfers</p>
      </div>

      <ImageGallery data={galleryData1} />

      <div className="bg-primary px-10 md:px-32 py-8 md:py-16">
        <p className="text-3xl pb-6">Locations</p>
        <div className="grid grid-cols-2 w-1/2 md:w-1/4 col-gap-4">
          <p>Birmingham</p>
          <p>Glasgow</p>
          <p>Bristol</p>
          <p>Liverpool</p>
          <p>Cambridge</p>
          <p>London</p>
          <p>Cardiff</p>
          <p>Luton</p>
          <p>Edinburgh</p>
          <p>Manchester</p>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
