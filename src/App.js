import React, { Component } from "react";

import PeopleStore from "./PeopleStore";
import People from "./People";

class App extends Component {
  render() {
    return <People store={PeopleStore} />;
  }
}

export default App;
