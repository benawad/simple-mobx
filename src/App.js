import React, { Component } from "react";

import CounterStore from "./CounterStore";
import Counter from "./Counter";

class App extends Component {
  render() {
    return <Counter store={CounterStore} />;
  }
}

export default App;
