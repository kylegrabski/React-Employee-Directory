import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "jquery/dist/jquery.slim"
import "font-awesome/css/font-awesome.min.css"
import UserCards from "./components/UserCards";
import API from "./utils/API";

class App extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };
  render() {
    return (
      <>
        <UserCards employees={this.state.employees} />
      </>
    );
  }
}

export default App;
