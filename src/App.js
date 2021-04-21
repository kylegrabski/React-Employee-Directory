import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <UserCards name={this.state.employees}/>
      </>
    );
  }
}

export default App;
