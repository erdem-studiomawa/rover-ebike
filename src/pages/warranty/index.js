import React from "react";

import "./empty.css";
import setTitle from "../../tools.js";

class EmptyPage extends React.Component {
  constructor() {
    super();

    setTitle("Rover E-Bike | Warranty", true);

    this.state = {};
  }

  render() {
    return <div className="warranty-page"></div>;
  }
}

export default EmptyPage;
