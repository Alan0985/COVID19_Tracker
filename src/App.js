import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import coronaVirus from "../src/images/coronaVirus.png";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  changeCountry = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({
      country: country,
      data: fetchedData,
    });
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={coronaVirus} className={styles.image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker onChangeCountry={this.changeCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
