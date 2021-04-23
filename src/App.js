import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.slim";
import "font-awesome/css/font-awesome.min.css";
import API from "./utils/API";
import UserCards from "./components/UserCards/UserCards";
import Navbar from "./components/Header/Navbar";
import JumbotronComp from "./components/Header/Jumbotron"

class App extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    const employees = data.results.map((item) => ({
      id: item.id.value,
      name:`${item.name.first} ${item.name.last}`,
      email: item.email,
      phone: item.phone,
      state: item.location.state,
      image: item.picture.large
    }))
    console.log(data)
    this.setState({ employees });
  };
  render() {
    if (this.state.employees === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else
      return (
        <>
          <Navbar />
          <JumbotronComp />
          <UserCards employees={this.state.employees} />
        </>
      );
  }
}

export default App;
