import React from "react";
import { Cards, Chart, ContryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  changeCountry = async (e) => {
    this.setState({ country: e.target.value });
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <ContryPicker onChangeCountry={this.changeCountry} />
        <Chart />
      </div>
    );
  }
}

export default App;
