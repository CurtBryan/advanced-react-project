import React, { Component } from "react";
import Axios from "axios";

class DataFetcher extends Component {
  constructor() {
    super();
    this.state = {
      shoes: null
    };
  }

  fetchData = () => {
    Axios.get(this.props.url).then(res => {
      this.setState({
        shoes: res.data
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.shoes
          ? this.props.renderShoes(this.state.shoes)
          : this.fetchData()}
      </div>
    );
  }
}

export default DataFetcher;
