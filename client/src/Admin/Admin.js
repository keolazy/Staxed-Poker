import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { API_URL } from "./../constants";
import axios from "axios";
import "../Admin/Admin.css";

class Admin extends Component {
  componentWillMount() {
    this.setState({ message: "" });
  }
  adminPing() {
    const { getAccessToken } = this.props.auth;
    const headers = { Authorization: `Bearer ${getAccessToken()}` };
    axios
      .post(`${API_URL}/admin`, {}, { headers })
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }));
  }
  render() {
    const { message } = this.state;
    return (
      <body>
        <div className="jumbotron vertical-center container-fluid">
          <div className="container text-center">
            <div className="container">
              <h2>You are an Admin!</h2>
              <p>
                Only users who have a <code>scope</code> of{" "}
                <code>write:messages</code> in their <code>access_token</code>{" "}
                can see this area.
              </p>
              <hr />

              <h3>Call an Admin endpoint</h3>
              <Button bsStyle="primary" onClick={this.adminPing.bind(this)}>
                Post a Message
              </Button>

              <h2>{message}</h2>
            </div>
          </div>
        </div>
      </body>
      // <body>
      //   <table className="table">
      //     <thead className="thead-dark">
      //       <tr>
      //         <th scope="col">#</th>
      //         <th scope="col">First</th>
      //         <th scope="col">Last</th>
      //         <th scope="col">Handle</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <th scope="row">1</th>
      //         <td>Mark</td>
      //         <td>Otto</td>
      //         <td>@mdo</td>
      //       </tr>
      //       <tr>
      //         <th scope="row">2</th>
      //         <td>Jacob</td>
      //         <td>Thornton</td>
      //         <td>@fat</td>
      //       </tr>
      //       <tr>
      //         <th scope="row">3</th>
      //         <td>Larry</td>
      //         <td>the Bird</td>
      //         <td>@twitter</td>
      //       </tr>
      //     </tbody>
      //   </table>
      // </body>
    );
  }
}

export default Admin;
