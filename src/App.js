import React, {Component} from "react";

import {Cards, Chart, CountryPicker} from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";
import corona from "./images/image.png";
class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetcheddata = await fetchData();
    this.setState({data: fetcheddata});
  }

  handleCountryChange = async (country) => {
    const fetcheddata = await fetchData(country);
    this.setState({data: fetcheddata, country: country});
  };
  render() {
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={corona} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <footer>Jaskirat Singh Obeori © Hansei By Design</footer>
      </div>
    );
  }
}

export default App;
