import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.slim";
import "font-awesome/css/font-awesome.min.css";
import API from "./utils/API";
import UserCards from "./components/UserCards/UserCards";
import Navbar from "./components/Header/Navbar";
import JumbotronComp from "./components/Header/Jumbotron";

class App extends Component {
  state = {
    employees: [],
    search: "",
    //true = ascending, false = descending
    sort: true,
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    const employees = data.results.map((item) => ({
      id: item.id.value,
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      phone: item.phone,
      state: item.location.state,
      image: item.picture.large,
      gender: item.gender,
    }));

    this.setState({ employees });
  };

  //search state.employees
  searchEmployees = (employee) => {
    if (employee.name.toLowerCase().includes(this.state.search.toLowerCase())) {
      return true;
    }
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      // search: value,
      [name]: value,
    });
  };

  handleSortByName = (e) => {
    //worked on making a copy and then rendering the UserSearchCards. Couldn't figure it out in time
console.log(this.state.sort)
    const sortEmployees = this.state.employees.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.setState({ results: sortEmployees });
    if (this.state.sort === true) {
      return this.setState({ sort: false });
    }

    if (this.state.sort === false) {
      return this.setState({ sort: true });
    }
  };

  render() {
    //if user API hasn't put data into state.employees, show Spinner loading. Else render components
    if (this.state.employees.length === 0) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">
            <h2>Loading...</h2>
          </span>
        </Spinner>
      );
    }
    if (this.state.employees.length) {
      return (
        <>
          <Navbar
            value={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <JumbotronComp
            handleSortByName={this.handleSortByName}
            getEmployees={this.getEmployees}
          />
          <UserCards
            employees={this.state.employees}
            searchEmployees={this.searchEmployees}
            handleSortByName={this.handleSortByName}
          />
        </>
      );
    }
  }
}

export default App;
