import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import PropTypes from "prop-types";
import CDatePicker from "./date_picker";
import CTimePicker from "./time_picker";
import { connect } from "react-redux";
import { actions } from "../state/actions";
import BookingDetail from "./booking_detail";
//import Checkout from "../components/stripe";

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_live_51HKQr1ABac0IArXeWpeqYTvOTTFdPh8Q7H1GwRKV2gmbg8pFx1zFRZtZ9gAalkAlurdeMFxMSL28Red9OOh7s0u0009v7mdMl5"
    );
  }
  return stripePromise;
};

class BookingMap extends Component {
  state = {
    directions: null,
    detailInfo: null, //contains distance and duration
    time: null,
    date: null,
  };

  constructor(props) {
    super(props);
    this.pickUpAddrInput = React.createRef();
    this.pickUpAddr = null;

    this.destAddrInput = React.createRef();
    this.destAddr = null;

    this.dateInput = React.createRef();
    this.timeInput = React.createRef();

    this.fullNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneNumberInput = React.createRef();

    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    this.confirmBooking = this.confirmBooking.bind(this);

    this.directionsService = new window.google.maps.DirectionsService();
  }

  componentDidMount() {
    var options = {
      componentRestrictions: { country: "uk" }, //United Kingdom Only
    };

    this.pickUpAddr = new window.google.maps.places.Autocomplete(
      this.pickUpAddrInput.current,
      options
    );
    this.pickUpAddr.addListener("place_changed", this.handlePlaceChanged);

    this.destAddr = new window.google.maps.places.Autocomplete(
      this.destAddrInput.current,
      options
    );
    this.destAddr.addListener("place_changed", this.handlePlaceChanged);
    localStorage.removeItem("bookingData");
  }

  handlePlaceChanged() {
    const origin = this.pickUpAddr.getPlace();
    const destination = this.destAddr.getPlace();
    if (origin === undefined || destination === undefined) {
      return;
    }

    this.directionsService.route(
      {
        origin: origin.formatted_address,
        destination: destination.formatted_address,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
            detailInfo: {
              distance: result.routes[0].legs[0].distance,
              duration: result.routes[0].legs[0].duration,
            },
          });
          //console.log(result);
        } else {
          //console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  confirmBooking = async (e) => {
    e.preventDefault();
	const distance =
    this.state.detailInfo != null
      ? (this.state.detailInfo["distance"]["value"] * 0.00062137).toFixed(2)
      : 0;
    const form = e.target;
    const origin = this.pickUpAddr.getPlace();
    const destination = this.destAddr.getPlace();
    if (origin === undefined) {
      this.pickUpAddrInput.current.focus();
      return;
    }
    if (destination === undefined) {
      this.destAddrInput.current.focus();
      return;
    }

    const date = this.dateInput.current.getDate();
    const time = this.timeInput.current.getTime();

    const formData = {
      "form-name": "make-booking",
      pickUpAddr: origin.formatted_address,
      destAddr: destination.formatted_address,
      date: date,
      time: time,
      fullName: this.fullNameInput.current.value,
      email: this.emailInput.current.value,
      phoneNumber: this.phoneNumberInput.current.value,
    };

    await this.setState({
      time: this.timeInput.current.getTime(),
      date: this.dateInput.current.getDate(),
    });

    if (typeof window !== `undefined`) {
      localStorage.setItem("bookingData", JSON.stringify(formData));
    }

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [
        {
          price: "price_1HPCeyABac0IArXe9wXrqE3T",
          quantity: Math.round(distance),
        },
      ],
      successUrl: `${window.location.origin}/confirm`,
      cancelUrl: `${window.location.origin}/makebooking`,
    });
    if (error) {
      console.warn("Error:", error);
    }
  };

  render() {
    const GoogleMapExample = withGoogleMap(() => (
      <GoogleMap
        defaultCenter={{ lat: 51.509865, lng: -0.118092 }} //London LatLan
        defaultZoom={13}
        defaultOptions={{ disableDefaultUI: true }}
      >
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    ));

    return (
      <form
        id="bookingForm"
        method="POST"
        action="/confirm"
        className="booking-form"
        name="booking-form"
        onSubmit={this.confirmBooking}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="booking-form" />

        <div className="bg-primary px-10 md:px-32 py-8 md:py-16">
          <input
            type="text"
            className="hidden"
            name="time"
            value={this.state.time}
          />
          <input
            type="text"
            className="hidden"
            name="date"
            value={this.state.date}
          />
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-2/5 justify-end pb-6 md:pb-0">
              <p className="font-lora-regular text-black text-2xl md:text-4xl pb-3">
                Make a booking
              </p>
              <p className="font-lora-regular text-primary text-xl pb-6">
                Journey Details
              </p>
              <div className="flex flex-col md:flex-row mb-4">
                <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
                  <CDatePicker ref={this.dateInput} />
                </div>
                <div className="w-full md:w-1/2 pl-0 md:pl-4">
                  <CTimePicker ref={this.timeInput} />
                </div>
              </div>
              <div className="mb-4">
                <input
                  required
                  ref={this.pickUpAddrInput}
                  className="form-input"
                  placeholder="PICK-UP ADDRESS"
                  name="pickup-address"
                ></input>
              </div>
              <div className="mb-8">
                <input
                  required
                  ref={this.destAddrInput}
                  className="form-input"
                  placeholder="DESTINATION ADDRESS"
                  name="destination-address"
                ></input>
              </div>

              <p className="font-lora-regular text-primary text-xl pb-6">
                Your Details
              </p>
              <div className="mb-4">
                <input
                  required
                  ref={this.fullNameInput}
                  className="form-input"
                  placeholder="FULL NAME"
                  name="full-name"
                ></input>
              </div>
              <div className="mb-4">
                <input
                  required
                  ref={this.emailInput}
                  className="form-input"
                  placeholder="EMAIL ADDRESS"
                  type="email"
                  name="email"
                ></input>
              </div>
              <div>
                <input
                  required
                  ref={this.phoneNumberInput}
                  className="form-input"
                  placeholder="PHONE NUMBER"
                  name="phone"
                ></input>
              </div>
            </div>
            <GoogleMapExample
              containerElement={
                <div className="w-full md:w-3/5 ml-0 md:ml-10 h-64 md:h-auto" />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
        <div className="flex justify-center bg-grey text-center px-10 md:px-32 py-8">
          <BookingDetail detailInfo={this.state.detailInfo} />
        </div>

        <div>
          <button
            className="w-full py-8 text-secondary font-lato-regular text-center text-2xl block uppercase bg-yellow"
            type="submit"
          >
            Confirm booking
          </button>
        </div>
      </form>
    );
  }
}

BookingMap.propTypes = {
  setBookingInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBookingInfo: (bookingInfo) =>
      dispatch({ type: actions.SET_BOOKING_INFO, payload: bookingInfo }),
  };
};

export default connect(null, mapDispatchToProps)(BookingMap);
