import React, { Component } from "react";
import * as token from "../services/tokenService";

class Token extends Component {
  state = {
    token: "",
  };

  async componentDidMount() {
    const success = await token.gettoken();

    this.setState({ token: success.data });
  }

  render() {
    // console.log(this.state.token);
    return (
      <div>
        <table className="table">
          <thead></thead>
        </table>
      </div>
    );
  }
}

export default Token;
