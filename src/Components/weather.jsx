import React from "react";
import axios from "axios";
import { Row, Col } from "antd";

const apiKey = "4068ad13120780e82aad3468f4ab824e";
const zipCode = 75229;
const countryCode = "US";
const baseApiEndpoint = "api.openweathermap.org/data/2.5/weather";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTemp: "84",
      maxTemp: "90",
      minTemp: "75"
    };
  }

  fetchWeatherData() {
    axios
      .get(`${baseApiEndpoint}?zip=${zipCode},${countryCode}&APPID=${apiKey}`)
      .then(resp => console.log(resp));
  }

  renderWeatherInformation() {
    const { currentTemp, maxTemp, minTemp } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 32 }}>{currentTemp}°</div>
        <Row gutter={10}>
          <Col span={12}>{minTemp}°</Col>
          <Col span={12}>{maxTemp}°</Col>
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
