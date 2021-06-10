import React from "react";

import "./home.css";
import setTitle from "../../tools.js";
import promoVideo from "../../assets/images/promo_video.svg";
import spotlightImage2 from "../../assets/images/main_image.svg";
import componentImage from "../../assets/images/home_product_component.svg";
import homeFooterImage from "../../assets/images/home_footer.png";
import iconStar from "../../assets/icons/star.svg";
import FindStore from "components/FindStore";
import Product from "components/Product";
import Brands from "components/Brands";

class HomePage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | Home", true);

    this.state = {};
  }

  render() {
    return (
      <section className="home">
        <div className="main-content">
          <div
            className="main-content-item"
            style={{
              backgroundImage: "url(" + promoVideo + ")",
            }}
            alt="Main Content Asset"
          />
        </div>

        <Product />

        <div className="product-component">
          <div className="product-component-description">
            <h4>D51 Display</h4>
            <p>
              The display's vibration feedback function ensures that every
              operation is under control. The high-sensitivity sensor accurately
              captures the rider's movements.
            </p>
            <p>
              Combined with the automativve-level software and deep system
              adjustment, the user experience is comparable to a mid-drive
              system.
            </p>
          </div>
          <div className="product-component-image">
            <img src={componentImage} />
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

export default HomePage;
