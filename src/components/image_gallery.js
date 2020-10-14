import React from 'react'
import PropTypes from "prop-types";
import images from "../constants/images";
import { Link } from "gatsby";

class ImageGallery extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div className="grid grid-cols-3">
            {this.props.data.map((item, index) => (
              <div className="relative" key={index}>
                <Link to={item.link}>
                  <img src={item.img} className="w-full h-full" />
                  <div
                    className="absolute flex justify-between px-2 md:px-10 py-2 md:py-8 w-full"
                    style={{ bottom: 0 }}
                  >
                    <span className="text-base md:text-3xl font-lora-regular text-white">
                      {item.text}
                    </span>
                    <img
                      src={images.IMG_RIGHT_ARROW}
                      className="object-none hidden md:block"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        );
    }
}

ImageGallery.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ImageGallery;