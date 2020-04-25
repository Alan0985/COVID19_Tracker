import React from "react";
import { Cards, Chart, ContryPicker } from "./components";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cards />
        <ContryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
