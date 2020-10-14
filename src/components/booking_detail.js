import React from "react";
import PropTypes from "prop-types"
import images from "../constants/images"

function BookingDetail({ detailInfo }) {
    const distance = detailInfo != null ? (detailInfo['distance']['value'] * 0.00062137).toFixed(2) : 0;
    const unitPrice = 1.30;
    
    return (
      <div className="flex flex-col md:flex-row w-full md:w-4/5">
        <div className="flex flex-col w-full md:w-1/3 text-left pb-6 md:pb-0">
          <div className="mx-0 md:mx-auto">
            <p>Price</p>
            <div className="">
              <span className="text-3xl md:text-5xl text-left">
                {distance != 0
                  ? "£" + (unitPrice * distance).toFixed(2)
                  : "---"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 text-left pb-6 md:pb-0">
          <div className="mx-0 md:mx-auto">
            <p>Total Distance</p>
            <div className="pt-4">
              <img src={images.IC_SIGNPOST} className="inline" />
              <span className="text-xl md:text-2xl ml-3 align-middle">
                {distance != 0 ? Math.round(distance) + " miles" : "---"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 text-left mx-auto">
          <div className="mx-0 md:mx-auto">
            <p>Estimated Time</p>
            <div className="pt-4">
              <img src={images.IC_WATCH} className="inline" />
              <span className="text-xl md:text-2xl ml-3 align-middle">
                {detailInfo != null
                  ? detailInfo["duration"]["value"] < 360
                    ? Math.round(detailInfo["duration"]["value"] / 60) +
                      " minutes"
                    : detailInfo["duration"]["text"]
                  : "---"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

BookingDetail.propTypes = {
    detailInfo: PropTypes.object
}

export default BookingDetail