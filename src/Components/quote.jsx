import React from "react";
import axios from "axios";
import { Row, Col } from "antd";

const baseApiEndpoint = "http://api.forismatic.com/api/1.0/";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteText: null,
      quoteAuthor: null
    };
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    axios({
      method: "POST",
      url: proxyurl + baseApiEndpoint,
      params: {
        method: "getQuote",
        format: "json",
        lang: "en"
      },
      headers: { "Content-Type": "application/json" }
    }).then(response =>
      this.setState({
        quoteText: response.data.quoteText,
        quoteAuthor: response.data.quoteAuthor
      })
    );
  }

  renderQuote() {
    const { quoteText, quoteAuthor } = this.state;
    return (
      <div style={{ fontSize: 18 }}>
        <Row>{quoteText && quoteText}</Row>
        <Row style={{ fontSize: 14, marginTop: "1em" }}>
          {quoteAuthor && `- ${quoteAuthor}`}
        </Row>
      </div>
    );
  }

  render() {
    return <div>{this.renderQuote()}</div>;
  }
}

export default Quote;
