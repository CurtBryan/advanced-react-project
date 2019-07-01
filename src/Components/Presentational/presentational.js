import React, { Component } from "react";
import Axios from "axios";
import PresentationalDisplay from "./PresentationalDisplay";

class presentational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: []
    };
  }

  componentDidMount() {
    Axios.get("/api/products").then(res => {
      this.setState({
        shoes: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <PresentationalDisplay shoes={this.state.shoes} />
      </div>
    );
  }
}

export default presentational;
