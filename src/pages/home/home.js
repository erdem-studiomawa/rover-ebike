import React from "react";

import "./home.css";
import setTitle from "../../tools.js";
import promoVideo from "../../assets/images/promo_video.svg";
import spotlightImage from "../../assets/images/e-bike.png";
import spotlightImage2 from "../../assets/images/main_image.svg";
import homeFooterImage from "../../assets/images/home_footer.png";
import iconStar from "../../assets/icons/star.svg";
import FindStore from "components/FindStrore";
import Brands from "components/Brands";

class Home extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | Home", true);

    this.state = {};
  }

  render() {
    return (
      <section className="home">
        <div className="main-content">
          <img
            className="main-content-item"
            src={promoVideo}
            alt="Main Content Asset"
          />
        </div>
        <div className="main-product">
          <div className="main-product-spotlight">
            <img src={spotlightImage} alt="Main product Image"></img>
          </div>
          <div className="main-product-information">
            <h5 className="product-heading">
              | ELITE <span>ROAD PERFORMANCE</span>
            </h5>
            <h3 className="product-name">
              M080 <span>MOTOR</span>
            </h3>
            <h4 className="product-price">CAD 2,895</h4>
            <div className="product-description">
              <p>
                Intelligent adjustment and powerful power output, specially
                designed for high power and high torque output use scenarios.
              </p>
              <p>
                Continuous power output can reach 350W; maximum torque output
                ≥80Nm, easy to deal with various complex road conditions and
                mountain terrain.
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
              <a href="/" className="product-action add-to-cart"></a>
              <a href="/" className="product-action check-out-now"></a>
            </div>
          </div>
        </div>
        <div className="center-content">
          <img src={spotlightImage2} alt="Center Content Asset" />
        </div>

        <FindStore />
        <Brands />

        <div className="home-footer">
          <img
            src={homeFooterImage}
            alt="Home Footer"
            className="home-footer-bg"
          />
          <div className="home-footer-quote">
            <h3>“A quote from a famous testimonial”</h3>
            <span>John Doe, Winner of Bicycle Tournament 2021</span>
            <div className="home-footer-starts">
              <img src={iconStar} className="home-footer-star" />
              <img src={iconStar} className="home-footer-star" />
              <img src={iconStar} className="home-footer-star" />
              <img src={iconStar} className="home-footer-star" />
              <img src={iconStar} className="home-footer-star" />
            </div>
            <a href="/" className="dark_button">
              Let's Ride
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
