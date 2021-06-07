import logo from "../assets/images/logo.png";

function Header() {
  return (
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
  );
}

export default Header;
