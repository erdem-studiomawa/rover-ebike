import logo from "../assets/images/logo.png";
import socialLogoInstagram from "../assets/icons/social/instagram.svg";
import socialLogoFacebook from "../assets/icons/social/facebook.svg";
import socialLogoLinkedin from "../assets/icons/social/linkedin.svg";
import socialLogoTwitter from "../assets/icons/social/twitter.svg";
function Footer() {
  return (
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
  );
}

export default Footer;
