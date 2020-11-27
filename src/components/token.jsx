import React, { Component } from "react";
import * as token from "../services/tokenService";

class Token extends Component {
  state = {
    token:[],
  };

  async componentDidMount() {
    const success = await token.gettoken();

    this.setState({ token: success.data });


  }


  create = () => {
    token.posttoken()
      window.location = "/home";
    
   }

  render() {
    // console.log(this.state.token)
    console.log(this.state.token.map(t=> t));
    return (
      <div className="mt-3">

        <button className="btn btn-outline-primary" onClick={this.create}> create a token </button>
        <table className="table">
          <thead><tr>
            <th>
              Token</th>
            <th>expire_time</th></tr></thead>
          <tbody>
            {this.state.token.map(t=>


            <tr>
              <td>
{t.token}
                </td>
                <td>{t.expire_time }</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Token;
