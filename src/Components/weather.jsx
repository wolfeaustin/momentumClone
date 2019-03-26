import React from "react";
import axios from "axios";
import { Row, Col } from "antd";

const apiKey = "4068ad13120780e82aad3468f4ab824e";
const zipCode = 75229;
const countryCode = "US";
const baseApiEndpoint = "http://api.openweathermap.org/data/2.5/weather";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTemp: null,
      maxTemp: null,
      minTemp: null
    };
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    // axios
    //   .get(`${baseApiEndpoint}?zip=${zipCode},${countryCode}&APPID=${apiKey}`)
    //   .then(resp =>
    //     this.setState(
    //       {
    //         currentTemp: resp.data.main.temp,
    //         maxTemp: resp.data.main.temp_max,
    //         minTemp: resp.data.main.temp_min
    //       },
    //       console.log(resp)
    //     )
    //   );
  }

  removeDecimalPlaces(decimal) {
    return parseInt(decimal);
  }

  kelvinToFarenheit(numberInKelvin) {
    return this.removeDecimalPlaces(numberInKelvin * (9 / 5) - 459.67);
  }

  renderWeatherInformation() {
    const { currentTemp, maxTemp, minTemp } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 32 }}>
          {currentTemp && this.kelvinToFarenheit(currentTemp)}°F
        </div>
        <Row gutter={10}>
          <Col span={12}>{minTemp && this.kelvinToFarenheit(minTemp)}°F</Col>
          <Col span={12}>{maxTemp && this.kelvinToFarenheit(maxTemp)}°F</Col>
        </Row>
      </div>
    );
  }

  render() {
    return (
      <div style={{ padding: "2em" }}>{this.renderWeatherInformation()}</div>
    );
  }
}

export default Weather;
