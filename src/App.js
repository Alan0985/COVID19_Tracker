import React from "react";
import { Cards, Chart, ContryPicker } from "./components";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <ContryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
