import React, { Component } from "react";
import { Row, Col } from "antd";
import Clock from "./Components/clock";
import Weather from "./Components/weather";
import Quote from "./Components/quote";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Row type="flex" justify="end" style={{ height: "15vh" }}>
          <Col>
            <Weather />
          </Col>
        </Row>
        <Row
          style={{ height: "70vh" }}
          type="flex"
          justify="center"
          align="middle"
        >
          <Col>
            <Clock />
          </Col>
        </Row>
        <Row
          style={{ height: "15vh", padding: "1em" }}
          type="flex"
          align="bottom"
          justify="start"
        >
          <Col span={8}>Location of picture</Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <Quote />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
