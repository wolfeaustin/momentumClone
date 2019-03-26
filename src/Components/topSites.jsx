import React from "react";
/*global chrome*/

class TopSites extends React.Component {
  constructor() {
    super();
    this.state = {
      sites: []
    };
  }

  componentDidMount() {
    console.log(chrome.topSites);
    // chrome.topSites.get(obj => console.log("obj", obj));
  }

  render() {
    return <div>Top Sites</div>;
  }
}

export default TopSites;
