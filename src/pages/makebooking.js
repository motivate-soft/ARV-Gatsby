import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { withScriptjs } from "react-google-maps";
import BookingMap from "../components/booking_map"

// import images from "../constants/images"
const pageData = {
    hasNavBar: true,
    hasBgSection: false,
}

function MakeBookingPage() {
    const MapLoader = withScriptjs(BookingMap);
    return (
      <Layout pageData={pageData}>
        <SEO title="Make a booking" />

        <div className="bg-primary background" /*style={{ minHeight: "100vh" }}*/ >
          <MapLoader
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7Ry6_w9cokLllNNBIgH4HsEAh8UDRL94&libraries=places"
            loadingElement={<div></div>}
          />
        </div>
      </Layout>
    );
}


export default MakeBookingPage;

