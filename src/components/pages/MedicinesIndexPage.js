import React, { Component } from "react";
import MedicinesSearchResultsContainer from "../containers/MedicinesSearchResultsContainer";
import API from "../../data/API";

export default class MedicinesIndexPage extends Component {
  state = {
    medicines: [],
    searchTerm: "",
  };

  componentDidMount() {
    if (this.props.user) {
      API.fetchMedicines().then((array) =>
        this.setState({ medicines: [...this.state.medicines, ...array] })
      );
    } else {
      this.props.history.push(this.props.redirect);
    }
  }

  updateSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  filterMedicines = () => {
    return this.state.medicines.filter((e) =>
      e.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        This is the Medicines Index Page <br />
        <h2>Medicines Title</h2>
        <label>Search Medicines by name:</label>
        <input
          type="text"
          className="search-bar"
          onChange={this.updateSearchTerm}
        ></input>
        <MedicinesSearchResultsContainer
          filteredMedicines={this.filterMedicines()}
        />
        This is the end of the Medicines Index Page
      </div>
    );
  }
}
