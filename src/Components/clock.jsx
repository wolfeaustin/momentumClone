import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: null };
  }

  componentDidMount() {
    setInterval(() => this.setTime(), 1000);
  }

  setTime() {
    let time = new Date();
    this.setState({ time });
  }

  makeSureThereAreTwoDigits(number) {
    return number.toString().length < 2 ? `0${number}` : `${number}`;
  }

  getHours(time) {
    return this.makeSureThereAreTwoDigits(time.getHours());
  }
  getMinutes(time) {
    return this.makeSureThereAreTwoDigits(time.getMinutes());
  }
  getSeconds(time) {
    return this.makeSureThereAreTwoDigits(time.getSeconds());
  }

  renderClock() {
    const { time } = this.state;
    return (
      <div>{`${this.getHours(time)}:${this.getMinutes(time)}:${this.getSeconds(
        time
      )}`}</div>
    );
  }

  render() {
    const { time } = this.state;
    return <div style={{ fontSize: 45 }}>{time && this.renderClock()}</div>;
  }
}

export default Clock;
