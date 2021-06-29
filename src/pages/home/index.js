import React from "react";

import "./index.css";
import setTitle from "../../tools.js";
import promoVideoSource from "../../assets/movies/rover-e-Bike-homepage.mp4";
import HomeProduct from "components/HomeProduct";
import Grid from "components/Grid";
import Reviews from "components/Reviews";

import landingImage from "../../assets/images/home-page-landing.png";

import sectionMovie1 from "../../assets/movies/3d_1_torque.mp4";
import sectionImage1 from "../../assets/images/homepage-image.png";
import sectionBatteryImage from "../../assets/images/3d_5_battery.png";
import gridBackgroundImage from "../../assets/images/home-page-grid-bg.png";
import gridBackgroundImageMobile from "../../assets/images/home-page-grid-mobile-bg.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.promoVideo = React.createRef();
    this.sectionVideo1 = React.createRef();
    this.sectionVideo2 = React.createRef();
  }

  componentDidUpdate() {}

  componentDidMount() {
    this.promoVideo.current.play();
  }

  render() {
    return (
      <div className="home">
        <div className="main-content">
          <video
            ref={this.promoVideo}
            src={promoVideoSource}
            poster={landingImage}
            muted
            loop
            autoPlay={true}
            preload={"none"}
            onLoad
          ></video>
          <div className="header-title">
            <h4>CHANGE THE WAY YOU RIDE</h4>
            <a href="/product" className="learn-more-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="offer-text">
          <p>LIMITTED TIME OFFER FIRST 50 BIKES FOR ONLY CA$ 1,899 !</p>
        </div>
        <HomeProduct />

        <div
          className="section-wrapper"
          onMouseEnter={() => {
            this.sectionVideo1.current.play();
          }}
        >
          <div className="product-section-desc odd">
            <div>
              <h4>Mivice Dual-sided Torque Sensor</h4>
              <p>
                Our fast responsive duel-sided torque sensor provides seemless
                power support and gives you the smoothest riding experience
              </p>
            </div>
          </div>

          <div className="product-section-image">
            <video ref={this.sectionVideo1} src={sectionMovie1} muted></video>
          </div>
        </div>

        <div className="section-wrapper even">
          <div className="product-section-desc even">
            <div>
              <h4>SHIMANO 7-Speed Freewheel</h4>
              <p>
                Ride anywhere with trustworthy Shimano TZ500 7-Speed 14-34t
                Freewheel.
              </p>
            </div>
          </div>

          <div className="product-section-image">
            <img src={sectionImage1} />
          </div>
        </div>

        <div className="section-wrapper">
          <div className="product-section-desc odd">
            <div>
              <h4>High Capacity Battery</h4>
              <p>
                High Capacity Battery Detachable &amp; long lasting battery(36V,
                14AH) provides convenient charging experience (fully charged
                within 5hrs) and allows riding up to 160km.
              </p>
            </div>
          </div>

          <div className="product-section-image">
            <img src={sectionBatteryImage} />
          </div>
        </div>

        <Grid
          style={{
            backgroundImage: "url(" + gridBackgroundImage + ")",
            height: "890px",
          }}
          mobileStyle={{
            backgroundImage: "url(" + gridBackgroundImageMobile + ")",
            height: "500px",
          }}
          items={[
            {
              icon: "/img/icons/canadian-maple-leaf.svg",
              title: "Canadian Own",
              content:
                "Based here, designed here, serve here",
            },
            {
              icon: "/img/icons/bike-rider.svg",
              title: "Smoothest Ride",
              content:
                "Have the smoothest riding experience by our duel-sided torque sensor.",
            },
            {
              icon: "/img/icons/battery-image.svg",
              title: "Detachable Battery",
              content:
                "Our detachable battery allows you to charge anywhere, and lasts up to 160km.",
            },
            {
              icon: "/img/icons/carbon_skill-level-advanced.svg",
              title: "Upgradable",
              content:
                "Allows to program motor speed, upgrade accessories and more.",
            },
            {
              icon: "/img/icons/sun-clock.svg",
              title: "Weatherproof",
              content:
                "Weatherproof rated IP66, ride wherever, whenever.",
            },
            {
              icon: "/img/icons/shipping.svg",
              title: "Ship Ready",
              content:
                "Free shipping & 7-day free return Canada wide",
            },
          ]}
        />

        <div className="shipping-line">
          <div>
            <img src="/img/icons/shipping-truck.svg" />
            <div className="shipping-line-content">
              <h5>Free shipping and 7 days free return Canada wide.</h5>
              <p>
                Different rates will be applied for US. Head to UPS website for
                more an estimated delivery fee.
              </p>
            </div>
          </div>
        </div>

        <Reviews
          items={[
            {
              name: "Frank F.",
              image: "/img/reviews/review-1.png",
              content:
                "Love the bike! Torque sensor system makes the rides very smooth, and the back motor barely makes any noise. Everything cuts out right way when you stop pedaling and the bike gives amazing assistance whenever you need it.",
            },
            {
              name: "Zhe Z.",
              image: "/img/reviews/review-2.png",
              content:
                "I really love the bike. Rover Y looks like a normal bike and can easily support me when I’m doing long-distance biking. I am going to buy a Rover X for my girlfriend as her birthday surprise.",
            },
            {
              name: "Site M.",
              image: "/img/reviews/review-3.png",
              content:
                "I love the idea of biking, but I hate going uphill. However, after I bought Rover Y, I’m enjoying biking every day. Everyone has been asking me where I got the bike, and they are all surprised of how well it’s been built. All the parts are made from licensed and well-known manufacturer. I am extremely happy with my purchase.",
            },
          ]}
        />
      </div>
    );
  }
}

export default HomePage;
