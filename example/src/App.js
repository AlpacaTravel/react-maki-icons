import React, { Component } from "react";

import Airport from "@alpaca-travel/react-maki-icons/icons/airport-11";

export default class App extends Component {
  render() {
    return (
      <div>
        <Airport fill="#343434" style={{ width: 200, height: 200 }} />
      </div>
    );
  }
}
