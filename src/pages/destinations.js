import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import images from "../constants/images";
import ImageGallery from "../components/image_gallery"
import HelpSection from "../components/help_section"
import { Link } from 'gatsby'

const pageData = {
    hasNavBar: true,
    hasBgSection: true,
    bgImg: images.BG_DEST,
    title: "Destinations",
    subTitle: "Arrive on time, every time",
    color: "text-black",
}

const galleryData = [
    {
        img: images.IMG_HOME_TH_7,
        text: "Heathrow"
    },
    {
        img: images.IMG_HOME_TH_8,
        text: "Gatwick"
    },
    {
        img: images.IMG_HOME_TH_9,
        text: "Stansted"
    },
    {
        img: images.IMG_HOME_TH_10,
        text: "Luton"
    },
    {
        img: images.IMG_HOME_TH_11,
        text: "Train Stations"
    },
    {
        img: images.IMG_HOME_TH_12,
        text: "Sightseeing Tours"
    },
]


function DestinationPage() {
    return (
        <Layout pageData={pageData}>
            <SEO
                title="Destinations"
            />
            <ImageGallery data={galleryData} />
            
            <div className="bg-primary px-10 md:px-32 py-8 md:py-16">
                <p className="text-3xl pb-6">Reach any UK destination</p>
                <div className="flex text-sm leading-loose">
                    <p className="w-full md:w-1/2 pr-10">
                        With a proven track record and a team that emphasises on customer service, great satisfaction and reliability, you can be sure that you’ve just hit the jackpot with ARV. Let us help you plan your journey to the last detail and we will let you worry about more important things! We are offering you with more than just a transfer… what are you waiting for? Experience ARV today!
                    </p>
                </div>
            </div>

            <div className="flex justify-center bg-grey text-center px-10 md:px-32 py-8">
                <div className="w-full md:w-1/2">
                    <p className="text-3xl pb-6">Calculate your rate</p>
                    <p className="pb-8">Prices are estimated examples of fares. For accurate quotes please use our
                        <Link className="underline" to="/makebooking"> booking system</Link>.
                    </p>
                </div>
            </div>

            <HelpSection />

        </Layout>
    );
}


export default DestinationPage;

