import React from "react";
import ReactDOM from "react-dom";

import logo from "../assets/images/logo.png";
import socialLogoInstagram from "../assets/icons/social/instagram.svg";
import socialLogoFacebook from "../assets/icons/social/facebook.svg";
import socialLogoLinkedin from "../assets/icons/social/linkedin.svg";
import socialLogoTwitter from "../assets/icons/social/twitter.svg";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: false,
    };
  }

  toggleMenu() {
    this.setState((prevState, props) => {
      console.log(prevState);
      return { menuStatus: !prevState.menuStatus };
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <a
            href="/"
            className="rover-ebike-logo"
            alt="Rover E-Bike"
            style={{
              backgroundImage: "url(" + logo + ")",
            }}
          ></a>
          <div className="rover-xy-menu">
            <a href="#">Rover X</a>
            <a href="#">Rover Y</a>
          </div>

          <div className="header-sub">
            <div className="cart-logo">
              <a href="#"></a>
            </div>
            <div className="main-menu">
              <nav
                className={this.state.menuStatus ? "navbar active" : "navbar"}
              >
                <div
                  className="hamburger-menu"
                  onClick={() => this.toggleMenu()}
                >
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
                </div>

                <ul className="nav-list">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/product" className="nav-link">
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Warranty
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {this.props.children}
        <footer className="App-footer">
          <div className="footer-logo">
            <img
              className="rover-ebike-logo"
              alt="Rover E-Bike"
              src={logo}
              href="/"
            />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Privacy & Legal</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Warranty</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <img src={socialLogoInstagram} alt="Instagram" />
            <img src={socialLogoFacebook} alt="Facebook" />
            <img src={socialLogoLinkedin} alt="LinkedIn" />
            <img src={socialLogoTwitter} alt="Twitter" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
