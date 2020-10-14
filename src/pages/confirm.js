import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import images from "../constants/images";

const pageData = {
  hasNavBar: false,
  hasBgSection: false,
};

function locals() {
	let localsdata; 
	if (typeof window !== "undefined") {
		localsdata = JSON.parse(window.localStorage.getItem("bookingData"));
	} else { 
		localsdata = null;
	}

	return localsdata;
}

const bookingData = locals();

function ConfirmPage() {
  return (
    <Layout pageData={pageData}>
      <SEO title="Booking confirmation" />
      <div className="flex flex-col text-center justify-center bg-primary px-10 md:px-32 pt-8 md:pt-16">
        <div className="flex justify-center">
          <Link to="/" className="my-auto">
            <img src={images.IC_APP} />
          </Link>
          <span className="text-black text-xl font-medium ml-6">
            International Transport
          </span>
        </div>
        <p className="font-lora-regular text-black text-2xl md:text-5xl pt-12">
          Confirmed
        </p>
        <p className="font-sans text-black text-xl pt-2">
          We have received your booking. We will confirm your booking via email
          soon.
        </p>
        <div className="fade-in flex mx-auto px-12 py-4 flex-col justify-between font-sans text-base bg-white text-center shadow mt-8">
          <div className="pb-8">
            <p className="text-black uppercase pb-2">pick-up address</p>
            <p>{bookingData === null ? "---" : bookingData.pickUpAddr}</p>
          </div>
          <div className="pb-8">
            <p className="text-black uppercase pb-2">Destination Address</p>
            <p>{bookingData === null ? "---" : bookingData.destAddr}</p>
          </div>
          <div className="flex">
            <div className="w-1/2 mr-6">
              <p className="text-black uppercase pb-2">Date</p>
              <p> {bookingData === null ? "---" : bookingData.date}</p>
            </div>
            <div className="w-1/2 ml-6">
              <p className="text-black uppercase pb-2">Time</p>
              <p> {bookingData === null ? "---" : bookingData.time}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-grey text-center px-10 md:px-32 py-8">
        <div className="w-full md:w-1/2">
          <p className="pb-2">Booking Reference</p>
          <p className="text-3xl">
            ARV-
            {bookingData === null ? "---" : bookingData.time.replace(/\D/g, "")}
            -
            {bookingData === null ? "---" : bookingData.date.replace(/\D/g, "")}
          </p>
        </div>
      </div>

      <div>
        <Link
          className="py-8 font-lato-regular text-secondary text-center text-2xl block bg-yellow"
          to="/makebooking"
        >
          Make another Booking
        </Link>
      </div>
    </Layout>
  );
}

export default ConfirmPage;
