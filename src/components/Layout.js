import logo from "../assets/images/logo.png";
import socialLogoInstagram from "../assets/icons/social/instagram.svg";
import socialLogoFacebook from "../assets/icons/social/facebook.svg";
import socialLogoLinkedin from "../assets/icons/social/linkedin.svg";
import socialLogoTwitter from "../assets/icons/social/twitter.svg";

function Layout(props) {
  return (
    <div>
      <header className="App-header">
        <a href="/">
          <img
            className="rover-ebike-logo"
            alt="Rover E-Bike"
            src={logo}
            href="/"
          />
        </a>
        <div className="rover-xy-menu">
          <a href="#">Rover X</a>
          <a href="#">Rover Y</a>
        </div>

        <div className="header-sub">
          <div className="cart-logo">
            <a href="#"></a>
          </div>
          <div className="main-menu">
            <a href="#"></a>
          </div>
        </div>
      </header>
      {props.children}
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

export default Layout;
