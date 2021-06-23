import React from "react";

import "../assets/styles/Product.css";

//import spotlightImage from "../assets/images/product/product1.svg";
import spotlightImage from "../assets/images/product/product-page-product-1.png";

import roverLogo from "../assets/images/product/rover_logo.svg";

class Product extends React.Component {
  addToCart() {
    $("#cart-badge")
      .removeClass("hidden")
      .find("span")
      .text(parseInt($("#cart-badge span").text()) + 1);
  }

  render() {
    return (
      <div className="main-product">
        <div
          className="main-product-spotlight"
          style={{
            backgroundImage: "url(" + spotlightImage + ")",
          }}
        ></div>
        <div className="main-product-information">
          <h5 className="product-heading">
            <span>|</span> It's your <span>world</span>, ride it!
          </h5>
          <h3 className="product-name">
            <img src={roverLogo} />
          </h3>
          <h4 className="product-price">
            <span className="product-old-price">CAD 2,895</span>
            CAD 2,895
          </h4>
          <div className="product-description">
            <p>
              Take on long distance and uphill adventures like a pro. With our
              innovative Torque Sensor System, you can make any challenging
              environment seems effortless.
            </p>
            <p>
              Body length: 170 - 175 cm
              <br />
              Frame size: 49 - 53 cm
            </p>
          </div>
          <div className="product-rotates">
            <div className="product-rotate rx">
              <span>X</span>
            </div>
            <div className="product-rotate ry">
              <span>Y</span>
            </div>
          </div>
          <div className="product-actions">
            <div
              className="product-action add-to-cart"
              onClick={() => this.addToCart()}
            >
              <div className="icon">
                <span></span>
              </div>
              <a href="#">Add to cart</a>
            </div>
            <div className="product-action check-out-now">
              <div className="icon">
                <span></span>
              </div>
              <a href="/checkout">Check out now</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
